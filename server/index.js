const Koa = require('koa')
const consola = require('consola')
const {
    Nuxt,
    Builder
} = require('nuxt')
const useragent = require('express-useragent'); //格式化用户的各种信息
const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)

    const {
        host = process.env.HOST || '127.0.0.1',
            port = process.env.PORT || 3000
    } = nuxt.options.server

    await nuxt.ready()
    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    app.use((ctx) => {
        const formatUserAgent = useragent.parse(ctx.req.headers['user-agent']); //获取各种用户信息
        if (app.env === 'production') { //生产环境打印日志
            console.log('ctx:', ctx);
            console.log('IP:', ctx.ip);
        }
        ctx.res.formatUserAgent = formatUserAgent; //将用户信息放入res
        ctx.status = 200
        ctx.respond = false // Bypass Koa's built-in response handling
        ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        nuxt.render(ctx.req, ctx.res)
    })
    app.on('error', err => { //监听错误
        console.log('logging error:', err.message);
        console.log(err);
    });
    app.listen(port, host)
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}

start()
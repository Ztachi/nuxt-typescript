const TerserPlugin = require('terser-webpack-plugin');
const head = require('./nuxtConfig/head');
const manifest = require('./nuxtConfig/manifest');
const loaders = require('./nuxtConfig/loaders');
const router = require('./nuxtConfig/router');
const server = require('./nuxtConfig/server');
const fa = require('./formatArgv');
const mode = fa(process.argv).mode;
const envName = mode ? '.env.' + mode : '.env';
//当前process.env.XXX
require('dotenv').config({
    path: envName
});

const productionPlugins = [];
if (process.env.NODE_ENV === 'production') {
    productionPlugins.push(new TerserPlugin({
        terserOptions: {
            compress: {
                drop_console: true
            }
        }
    }));
}

module.exports = {
    mode: 'universal',
    /* 
    Node.js服务器将根据用户代理检查浏览器版本，
    并提供相应的现代浏览器或兼容性低的浏览器捆绑依赖。
    */
    modern:'server',
    /*
     ** Headers of the page
     */
    head,
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: 'purple'
    },
    loadingIndicator: {
        name: 'folding-cube',
        color: '#409EFF',
        background: 'purple'
    },
    /* 
    使用extract-css-chunks-webpack-plugin将主块中的 CSS 提取到一个单独的 CSS 文件中（自动注入模板），
    该文件允许单独缓存文件。
     */
    extractCSS:true,
    /*
     ** Global CSS
     */
    css: [
        // 'element-ui/lib/theme-chalk/index.css',
        '@/assets/css/common.scss',
        '@/assets/css/global.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/element-ui.ts',
        '@/plugins/axios.ts',
        '@/plugins/main.ts',
        '@/plugins/hooks.ts',
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxt/typescript-build',
        //https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv'
    ],
    dotenv: { //页面内process.env.XXXX
        filename: envName
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        ['@nuxtjs/pwa', manifest],
        '@nuxtjs/style-resources'
    ],
    //用更效率的方法加速编译
    styleResources: {
        scss: [
            '@/assets/css/fn/*.scss'
        ]
    },
    //配置服务器端中间件
    serverMiddleware: ['@/middleware/serve',
        //  {
        //     path: '/api',
        //     handler: '~/api/index.js'
        // } 
    ],
    router,
    server,
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.BASE_URL,
        // browserBaseURL:
        //请求失败重试3次
        retry: {
            retries: 3
        }
    },
    /*
     ** Build configuration
     */
    build: {
        //关闭友好的错误提示
        friendlyErrors: false,
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        loaders,
        plugins: [
            ...productionPlugins
        ],
        /* 
        Nuxt.js允许您将dist文件上传到CDN来获得最快渲染性能，
        只需将publicPath设置为CDN即可。
        当启动nuxt build时， 将.nuxt/dist/client目录的内容上传到您的CDN即可！
        */
        publicPath:'/_nuxt/'
    }
}
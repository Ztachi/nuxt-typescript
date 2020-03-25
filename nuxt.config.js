const head = require('./information/head');
const manifest = require('./config/manifest');
const loaders = require('./config/loaders');
const TerserPlugin = require('terser-webpack-plugin');
const fa = require('./libs/formatArgv');
const mode = fa(process.argv).mode;
const envName = mode ? '.env.' + mode : '.env';
//当前process.env.XXX
require('dotenv').config({
    path: envName
});

const productionPlugins=[];
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
        '@/plugins/element-ui',
        '@/plugins/axios',
        '@/plugins/main',
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
    //配置页面中间件
    router: {
        middleware: 'page'
    },
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
        plugins:[
            ...productionPlugins
        ]
    }
}
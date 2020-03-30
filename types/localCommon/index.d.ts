/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2020-03-25 17:18:47 
 * @Description: 通用的接口定义
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-30 14:42:22
 */
import { Store } from "Vuex";
import { AxiosInstance } from "axios";
import { ComponentOptions } from "vue";
import { route } from "vue-router";
interface AnyObject {
    [propName: string]: any;
}

//nuxt上下文对象
interface Ctx {
    app: ComponentOptions,//包含所有插件的 Vue 根实例。例如：在使用 axios 的时候，你想获取 $axios 可以直接通过 context.app.$axios 来获取
    isClient?: Boolean,//是否来自客户端渲染（废弃。请使用 process.client ）
    isServer?: Boolean,//是否来自服务端渲染（废弃。请使用 process.server ）
    isStatic?: Boolean,//是否来自 nuxt generate 静态化（预渲染）（废弃。请使用 process.static ）
    isDev: Boolean,//是否是开发 dev 模式，在生产环境的数据缓存中用到
    isHMR: Boolean,//是否是通过模块热替换 webpack hot module replacement (仅在客户端以 dev 模式)
    route: route,//Vue Router 路由实例
    store: Store<any>,//Vuex.Store 实例。只有vuex 数据流存在相关配置时可用
    env: Object,//nuxt.config.js 中配置的环境变量，见 环境变量 api
    params: Object,//route.params 的别名
    query: Object,//route.query 的别名
    req?: Object,//服务端 Node.js API 的 Request 对象。如果 Nuxt 以中间件形式使用的话，这个对象就根据你所使用的框架而定。nuxt generate 不可用
    res?: Object,//服务端 Node.js API 的 Response 对象。如果 Nuxt 以中间件形式使用的话，这个对象就根据你所使用的框架而定。nuxt generate 不可用
    redirect: Function,//用这个方法重定向用户请求到另一个路由。状态码在服务端被使用，默认 302 redirect([status,] path [, query])
    error: Function,//用这个方法展示错误页：error(params) 。params 参数应该包含 statusCode 和 message 字段
    nuxtState?: Object,//客户端 Nuxt 状态，在使用 beforeNuxtRender 之前，用于客户端获取 Nuxt 状态，仅在 universal 模式下可用
    beforeNuxtRender?: Function,//服务端 使用此方法更新 __NUXT__ 在客户端呈现的变量，fn 调用 (可以是异步) { Components, nuxtState }
}

interface AsyncData extends Ctx {
    $axios: AxiosInstance
}

export { AnyObject, Ctx, AsyncData };

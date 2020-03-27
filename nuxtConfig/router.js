/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2020-03-27 11:39:36 
 * @Description: 个性化路由配置
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-27 14:57:59
 */
module.exports = {
    /* 
    应用的根URL。举个例子，如果整个单页面应用的所有资源可以通过 /app/ 来访问，
    那么 base 配置项的值需要设置为 '/app/'。
    */
    base: '/',
    /* 
    我们有页面文件pages/posts/_id.vue。Nuxt将以编程方式生成路由名称，在本例中为posts-id。
    因此，将routeNameSplitter配置修改为/，这样路由名称生成为posts/id。
    */
    routeNameSplitter: '-',
    //添加自定义路由:
    extendRoutes(routes, resolve) {
        /* routes.push({
            name: 'custom',
            path: '*',
            component: resolve(__dirname, 'pages/404.vue')
        })
        } */
    },
    //全局配置 <nuxt-link> 组件默认的激活类名。
    linkActiveClass:'nuxt-link-active',
    //全局配置 <nuxt-link> 默认的active class。
    linkExactActiveClass:'nuxt-link-exact-active',
    //全局配置<nuxt-link>默认值(默认情况下禁用功能)
    linkPrefetchedClass:false,
    /* 
    scrollBehavior 配置项用于个性化配置跳转至目标页面后的页面滚动位置。
    每次页面渲染后都会调用 scrollBehavior 配置的方法。
    */
  /*   scrollBehavior(to, from, savedPosition){

    }, */
    
    //配置页面中间件
    middleware: 'page'
}
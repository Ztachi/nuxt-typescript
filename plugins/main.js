/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2019-06-01 11:37:58 
 * @Description: vue项目全局的一些配置
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-17 23:27:49
 */
export default ({
    app
}) => {

    app.router.beforeEach((to, from, next) => {
        next();
    });
    app.router.afterEach((to, from) => {

        // app.store.commit('setNavigation', to);


    });
}
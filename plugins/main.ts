/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2019-06-01 11:37:58 
 * @Description: vue项目全局的一些配置
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-25 17:41:50
 */
import {ctx} from '../interface/common';

export default ({
    app
}: ctx) => {

    app.router.beforeEach((to: any, from: any, next: any) => {
        next();
    });
    app.router.afterEach((to: any, from: any) => {

        // app.store.commit('setNavigation', to);


    });
}
/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2019-04-27 15:40:51 
 * @Description: 页面间中间件
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-27 10:30:15
 */
export default ({
    store,
    redirect
}) => {
    // 使用 context
    console.log('pageMiddleware:',  store.state.modules.example.wheels);
};

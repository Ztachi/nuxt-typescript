/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2019-04-27 15:40:51 
 * @Description: 页面间中间件
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-15 13:14:45
 */

export default ({
    store,
    res
}) => {
    //设置用户信息
    if (res) {
        // store.commit('setUserAgent', res.formatUserAgent);
    }
};
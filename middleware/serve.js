/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2019-04-27 15:19:47 
 * @Description: 服务器端中间件
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2019-04-27 19:46:39
 */

export default (req, res, next) => {
    // console.log(useragent.parse(req.headers['user-agent']));
    next();
};

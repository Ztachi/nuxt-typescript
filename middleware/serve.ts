/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2019-04-27 15:19:47 
 * @Description: 服务器端中间件
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-25 17:58:08
 */

import { ServerMiddleware } from '@nuxt/types';

const myServerMiddleware: ServerMiddleware = function (req, res, next) {
    // console.log(useragent.parse(req.headers['user-agent']));
    next();
};

export default myServerMiddleware;
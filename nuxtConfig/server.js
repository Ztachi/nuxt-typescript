/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2020-03-27 11:52:17 
 * @Description: 服务器的一些配置
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-27 11:55:44
 */
module.exports = {

    port: process.env.PORT || 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    // https: {
    //     key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //     cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // },
    // socket: '/tmp/nuxt.socket'
}
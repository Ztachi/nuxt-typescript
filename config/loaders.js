/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2019-04-27 17:12:41 
 * @Description: 配置loaders
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-17 10:29:31
 */
module.exports = {
    file: {},
    fontUrl: {
        limit: 1000
    },
    imgUrl: {
        limit: 1000
    },
    pugPlain: {},
    vue: {
        transformAssetUrls: {
            video: 'src',
            source: 'src',
            object: 'src',
            embed: 'src'
        }
    },
    css: {},
    cssModules: {
        localIdentName: '[local]_[hash:base64:5]'
    },
    less: {},
    sass: {
        indentedSyntax: true
    },
    scss: {},
    stylus: {},
    vueStyle: {}
}
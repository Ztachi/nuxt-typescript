/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2020-03-16 16:50:55 
 * @Description: 对process.arg传参进行格式化
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-27 10:20:50
 */

module.exports = (params) => {
        const list = params.filter(d => d.includes('='));
        if (list.length) {
            const obj= {};
            list.forEach(d => {
                const arr = d.split('=');
                // 去掉 "--"
                obj[arr[0].slice(2)] = arr[1];
            });
            return obj;
        } else {
            return {};
        }
    };
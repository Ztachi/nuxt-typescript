/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2019-04-27 16:32:46 
 * @Description: 设置头部信息
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-25 15:30:06
 */
export default {
    title: '朴新在线',
    meta: [{
        charset: 'utf-8'
    },
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
    },
    {
        hid: 'description',
        name: 'description',
        content: '朴新在线'
    },
    {
        hid: 'keywords',
        name: 'keywords',
        content: '朴新在线'
    },
    {
        'http-equiv': 'x-dns-prefetch-control',
        content: 'on'
    }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/bear_cn.ico'
    }, {
        rel: 'dns-prefetch',
        href: "https://ztachi.com/"
    }]
};


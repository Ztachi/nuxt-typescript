/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2020-03-27 14:22:16 
 * @Description: 滚动条组件引入
 * @Last Modified by:   詹真琦(legendryztachi@gmail.com) 
 * @Last Modified time: 2020-03-27 14:22:16 
 */
import Vue from 'vue';
import vuescroll from 'vuescroll'; //滚动条组件

//配置滚动条
Vue.use(vuescroll, {
    ops: {
        bar: {
            // onlyShowBarOnScroll: false,
            // keepShow:true,
            background: 'rgba(153,153,153,.75)',
        }
    }, // 在这里设置全局默认配置
    name: 'v-scroll' // 在这里自定义组件名字，默认是vueScroll
});
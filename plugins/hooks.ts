/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2020-03-25 16:59:09 
 * @Description: 注册钩子函数
 * @Last Modified by:   詹真琦(legendryztachi@gmail.com) 
 * @Last Modified time: 2020-03-25 16:59:09 
 */

import Component from 'vue-class-component';
Component.registerHooks([
    'asyncData',
    'fetch',
    'beforeRouteUpdate'
])
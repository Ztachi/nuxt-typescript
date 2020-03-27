/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2020-03-26 13:59:51 
 * @Description: 自定义进度条
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-26 14:02:29
 */
module.exports = {
    color: 'purple',//进度条的颜色
    failedColor: 'red',//页面加载失败时的颜色 （当 data 或 fetch 方法返回错误时）。
    height: '2px',//	进度条的高度 (在进度条元素的 style 属性上体现)。
    throttle: 200,//	在ms中，在显示进度条之前等待指定的时间。用于防止条形闪烁。
    duration: 5000,//进度条的最大显示时长，单位毫秒。Nuxt.js 假设页面在该时长内加载完毕。
    continuous: false,//当加载时间超过duration时，保持动画进度条。
    css: true,//设置为false以删除默认进度条样式（并添加自己的样式）。
    rtl: false//	从右到左设置进度条的方向。
}

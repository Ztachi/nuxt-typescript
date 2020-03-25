/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2020-03-25 16:15:21 
 * @Description: 错误处理页
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-25 16:15:43
 */

<template>
    <div id="error">
        <div>
            <div v-if="error.statusCode === 404"><span>404</span><br/>{{error.message||'页面不存在'}}</div>
            <div v-else>应用发生错误异常</div>
            <!-- <img src="~/assets/img/error.png" alt=""> -->
            <!-- <router-link to="/">回到首页</router-link> -->
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style lang="scss" scoped>
    #error {
        // position: fixed;
        // z-index: 9;
        height: 100%;
        width: 100%;
        font-size: 40px;
        text-align: center;
        // background-color: #fff;
        // top: 0;
        // left: 0;
        // z-index: 10001;
        >div {
            @include middle;
            >div {
                font-weight: 900;
                >span {
                    font-size: 160px;
                }
            }
            >img{
                margin-top: 20px;
            }
            >a {
                padding: 5px 30px;
                border-radius: 40px;
                background-color: skyblue;
                color: #fff;
                margin-top: 20px;
                display: block;
            }
        }
    }
</style>


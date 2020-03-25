/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2019-04-27 16:39:13 
 * @Description: axios配置
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-25 16:00:22
 */
interface axios{
    $axios:{
        onRequest:Function
        onResponse:Function
        onError:Function
        onRequestError:Function
        onResponseError:Function
    }
}
export default ({
    $axios
}:axios) => {
    $axios.onRequest((config:Object) => {

    })
    $axios.onResponse((res:Object) => {

    });
    $axios.onError((err:Object) => {

    });
    $axios.onRequestError((err:Object) => {

    })
    $axios.onResponseError((err:Object) => {

    })
};
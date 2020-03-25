/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2020-03-25 17:18:47 
 * @Description: 通用的接口定义
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2020-03-25 17:47:35
 */
import { Store } from "Vuex";
import { AxiosInstance } from "axios";
export interface anyObject{
    [propName: string]: any;
}

export interface ctx {
    app: any
}

export interface asyncData{
    store:Store<any>;
    query:Object;
    $axios:AxiosInstance
}
export interface fetchData{
    store:Store<any>;
    params:Object;
    $axios:AxiosInstance
}
// export interface responseData{
//     status:number;
//     data:any;
//     errCode:string;
//     messages?:string;
//     isVoid?:any
// }

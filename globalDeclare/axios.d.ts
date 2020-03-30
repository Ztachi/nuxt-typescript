import axios, { AxiosInstance } from "axios";

declare module "vue/types/vue" {
    interface Vue {
        $axios: AxiosInstance
    }
    interface VueConstructor {
        $axios: AxiosInstance
    }
}
declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>
    }
}

import Vue, { ComponentOptions } from "vue";
import { Store } from "Vuex";

declare module "vue/types/options" {
    interface ComponentOptions<V extends Vue> {
        store?: Store<any>;
    }
}

declare module "vue/types/vue" {
    interface Vue {
        $store: Store<any>;
    }
    interface VueConstructor {
        $store: Store<any>;
    }
}
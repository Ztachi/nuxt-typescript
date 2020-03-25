<template>
    <div id="pageDemo">
        <el-button type="primary">
            <nuxt-link to="/demo/vuexDemo">go to vuexDemo</nuxt-link>
        </el-button>
        <el-switch v-model="value3" active-text="好评" inactive-text="差评"></el-switch>
        <nuxt-child />
        <demo :name.sync="name" :propC="true" @add-to-count="v=>count=v" />
        <ul>
            <li>
                can not change:
                <input type="text" v-model="baz" />
            </li>
            <li>
                change:
                <input type="text" v-model="change" />
            </li>
            <li>count: {{count}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {asyncData,fetchData} from '@/interface/common';
    import {
        Component,
        Vue,
        Watch,
        Provide,
        ProvideReactive
    } from "vue-property-decorator";
    import demo from "@/components/demo.vue";
    const symbol = Symbol("baz");
    @Component({
        components: {
            demo
        }
    })
    export default class pageDemo extends Vue {
        name: string = "1";
        count: number = 0;
        value3: boolean = true;
        //利用 asyncData方法来获取数据并返回给当前组件。
        //由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。
        async asyncData({
            store,
            query,
            $axios
        }:asyncData) {
            const {
                data: {
                    data: d
                }
            } = await $axios.get('http://www.puxinonline.com/api/course/index/getBanner');
            return {
                banner: d
            }
        }
        //用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。
        //警告: 您无法在内部使用this获取组件实例，fetch是在组件初始化之前被调用
        fetch({
            store,
            params,
            $axios
        }:fetchData) {
            return $axios.get('http://www.puxinonline.com/api/course/index/getBanner').then(({
                data: d
            }) => {
                store.commit('modules/example/setBanner', d.data);
            })
        }
        @Watch("value3")
        value3Change(v: boolean) {
            if (!v) {
                this.$message.error("差评设置失败！（不支持差评）");
                setTimeout(() => {
                    this.value3 = true;
                }, 300);
            }
        }
        //@Provide(key?: string | symbol) / @Inject(options?: { from?: InjectKey, default?: any } | InjectKey) decorator
        //Provide（传给子集的名称）  ProvideReactive父元素改动，子元素能响应
        @Provide("bar") baz = "bar112";
        @ProvideReactive() change = "change";
        mounted() {}
    }
</script>
<style lang="scss">
    #pageDemo {
        li {
            margin: 5px;
        }
        input {
            border: 2px solid purple;
        }
    }
</style>
<style lang="scss" scoped>
    #pageDemo {
        background-color: gold;
    }
</style>
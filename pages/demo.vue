<template>
    <div id="pageDemo">
        <el-button type="primary"><nuxt-link to="/demo/vuexDemo">go to vuexDemo</nuxt-link></el-button>
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
    import {
        Component,
        Vue,
        Watch,
        Provide,
        ProvideReactive
    } from "vue-property-decorator";
    import demo from "~/components/demo.vue";
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
<template>
    <div class="container">
        <div>
            <el-button type="primary"><nuxt-link to="./demo">demo</nuxt-link></el-button>
            <h1 class="title">{{$axios.defaults.baseURL}}</h1>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Component
    } from "vue-property-decorator";
    @Component
    export default class pageIndex extends Vue {
        name: string = "1";
        a(a: String) {}
        b() {
            this.a("s");
        }
        mounted() {
            this.a("");
            console.log(this.$axios.defaults);
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        b {
            display: inline-block;
            font-size: 50px;
            color: var(--primary-color);
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
</style>


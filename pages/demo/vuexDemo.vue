<template>
    <div id="vuexDemo">
        <ul>
            <li>wheels:{{wheels}}<br>wheels1:{{wheels1}}<br/>events:{{JSON.stringify(events)}}<br/>getter axles:{{axles}}</li>
            <li><button @click="addFive()">Action addFive</button></li>
            <li><button @click="fetchAll([wheels+1,wheels+2,wheels+3])">MutationAction fetchAll</button></li>
            <li><button @click="incrWheels(1)">Mutation incrWheels</button></li>
        </ul>
    </div>
</template>
<script lang="ts">
    import {
        Vue,
        Component
    } from 'vue-property-decorator';
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from 'vuex-class';
    const example = namespace('modules/example');
    const example1 = namespace('modules/example1');
    @Component
    export default class vuexDemo extends Vue {
        @example.State wheels: number | undefined
        @example1.State wheels1: number | undefined
        @example.State('events') events: number | undefined
        @example.State(state => state.wheels) wheels2: number | undefined
        @example.Getter axles: number | undefined
        @example.Action addFive: Function | undefined
        @example.Action fetchAll: Function | undefined
        @example.Mutation incrWheels: Function | undefined
        mounted() {
            this.$store.dispatch('modules/example/addFive2');
        }
    }
</script>
<style lang="scss" scoped>
    #vuexDemo {
        background-color: purple;
        color: #fff;
    }
</style>
<template>
    <div id="demo">
        <svg class="NuxtLogo" width="245" height="180" viewBox="0 0 452 342" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z"
              fill="#00C58E"
            />
            <path
              d="M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z"
              fill="#108775"
            />
            <path
              d="M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z"
              fill="#2F495E"
              fill-rule="nonzero"
            />
          </g>
        </svg>
        <ul>
            <li>wheels:{{wheels}}</li>
            <li>propA:{{propA}}</li>
            <li>propB:{{propB}}</li>
            <li>propC:{{propC}}</li>
            <li>
                name:
                <input type="text" :value="name" @input="changeName" /> {{name}}
            </li>
            <li>
                child:
                <input type="text" v-model="child" />
                <br />person.name:
                <input type="text" v-model="person.name" />
                <br />person.age:
                <input type="number" v-model="person.age" />
                <br /> info:{{info}}
            </li>
            <li>
                can not change:{{bar}}
                <br /> show parent change: {{change}}
            </li>
            <li>
                <button @click="addToCount(1)">count++</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Component,
        Prop,
        PropSync,
        Watch,
        Inject,
        InjectReactive,
        Emit
    } from "vue-property-decorator";
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from "vuex-class";
    const example = namespace("modules/example");
    interface Person {
        name: string;
        age: number;
    }
    @Component
    export default class componentDemo extends Vue {
        child: string = "小熊";
        person: Person = {
            name: "詹真琦",
            age: 17
        };
        count: number = 1;
        get info() {
            return `姓名：${this.person.name},年龄：${this.person.age}`;
        }
        @example.State wheels: number | undefined;
        //@Prop(options: (PropOptions | Constructor[] | Constructor) = {}) decorator
        @Prop({
            type: Number,
            default: 12
        })
        readonly propA: number | undefined;
        @Prop({
            default: "default value"
        })
        readonly propB!: string;
        @Prop([String, Boolean]) readonly propC: string | boolean | undefined;
        //@PropSync(propName: string, options: (PropOptions | Constructor[] | Constructor) = {}) decorator
        @PropSync("name", {
            type: String
        })
        syncedName!: string;
        changeName(e: any) {
            this.syncedName = e.target.value;
        }
        //@Watch(path: string, options: WatchOptions = {}) decorator
        @Watch("child")
        onChildChanged(val: string, oldVal: string) {
            console.log(val);
        }
        @Watch("person", {
            immediate: true,
            deep: true
        })
        onPersonChanged1(val: Person, oldVal: Person) {
            console.log(val);
        }
        @Watch("person")
        onPersonChanged2(val: Person, oldVal: Person) {
            console.log(val);
        }
        //@Provide(key?: string | symbol) / @Inject(options?: { from?: InjectKey, default?: any } | InjectKey) decorator
        //Inject(父级Provide名称)   子集想要的名称
        @Inject("bar") readonly bar!: string;
        @InjectReactive() change!: string;
        //@Emit(event?: string) decorator
        @Emit()
        addToCount(n: number) {
            this.count += n;
            return this.count;
        }
        mounted() {}
    }
</script>

<style lang="scss" scoped>
    #demo {
        background-color: #fff;
    }
</style>

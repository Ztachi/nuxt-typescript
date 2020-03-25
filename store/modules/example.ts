import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators';
import axios from 'axios';
// import store from '@/store';
const { get, post } = axios;
@Module({
    // dynamic: true,
    // name: 'example',
    // store,
    stateFactory: true,
    namespaced: true
})
class exampleClass extends VuexModule {
    //state
    wheels: number = 2
    events: any[] = [];
    banner:any[]=[];
    //getters
    get axles() {
        return this.wheels / 2
    }
    //mutations
    @Mutation
    incrWheels(extra: number) {
        this.wheels += extra
    }
    //mutations
    @Mutation
    setBanner(data:any[]) {
        this.banner=data;
    }

    @Action({ commit: 'incrWheels' })
    addFive(number: number = 5) {
        return number;
    }
    //异步之后，触发某个mutation
    @Action({ commit: 'incrWheels'})
    addFive2(number: number = 5) {
        return number;
    }
    // 'events' and 'conferences' are replaced by returned object
    // whose shape must be `{events: [...], conferences: [...] }`
    //异步之后，直接更改state
    @MutationAction({ mutate: ['events'] })
    async fetchAll(arr: number[] = [1, 2, 3]) {
        const response: Response = await get('https://hasgeek.github.io/events/api/events.json');
        return {
            events: arr
        }
    }

}
export default exampleClass;
// export default getModule(exampleClass);


import Vuex from 'vuex'
import example from './modules/example'
import example1 from './modules/example1'

export function createStore() {
    return new Vuex.Store({
        modules: {
            example,example1
        },
    })
}

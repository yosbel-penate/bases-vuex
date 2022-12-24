import { createStore } from "vuex";
import getRandomInt from "@/helpers/getRandomInt";
export default createStore({
    state:{
        count:1,
        lastMutation: 'none',
        isLoading: false
    },
    mutations:{
        increment(state){
            state.count ++
            state.lastMutation = 'increment'
        },
        incrementBy(state, val){
            state.count += val
            state.lastMutation = 'incrementBy'
        }
    },
    actions:{
        async incrementRandomInt(contex){

            const randomInt =  await getRandomInt()
            contex.commit('incrementBy', randomInt)

        }
    }
})
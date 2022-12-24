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
        }, 
        setLoading(state, val){
            state.isLoading = val
        }
    },
    actions:{
        async incrementRandomInt({commit}){
            commit('setLoading', true)
            const randomInt =  await getRandomInt()
            commit('incrementBy', randomInt)
            commit('setLoading', false)
        }
    },
    getters:{
        squareCount(state){
            return Math.pow(state.count, 2)
        }
    }
})
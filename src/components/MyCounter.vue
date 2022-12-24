<template>
    <div>
        <h1>Counter - Vuex</h1>
        <h2>Direct access: {{ $store.state.count }}</h2>
        <h2>Computed: {{ countComputed }}</h2>
        <button @click = "increment" >+1</button>
        <button @click = "incrementBy" >+5</button>
        <button>Random</button>
        <h2>mapState: {{ count }}</h2>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: 'MyCounter',
    computed:{
        countComputed(){
            return this.$store.state.count
        },
        ...mapState(['count'])
    },
    methods:{
        increment(){
            this.$store.commit('increment')
        },
        incrementBy(){
            this.$store.commit('incrementBy', 5)
        },
    }
}
</script>
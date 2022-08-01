import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carrito: []
    },
    mutations: {
        agregarAlCarrito: (state, item) => {
            state.carrito.push(item)
        }
    },
    actions: {
        setCarrito: ({commit}, item) => {
          commit('agregarAlCarrito', item)
        }
    }
})
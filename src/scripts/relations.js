import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carrito: [],
        esAdmin: false
    },
    mutations: {
        agregarAlCarrito: (state, item) => {
            state.carrito.push(item)
        },
        setRol: (state, esAdmin) => {
            state.esAdmin = esAdmin
        },
        getRol(state){
            return state.esAdmin
        }
    },
    actions: {
        setCarrito: ({commit}, item) => {
          commit('agregarAlCarrito', item)
        },
        setRol: ({commit}, esAdmin) => {
          commit('setRol', esAdmin)
        }
    }
})
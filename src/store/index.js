import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarioLog: '',
        esAdmin: false
    },
    mutations: {
        setRol: (state, payload) => {
            state.esAdmin = payload
        },
        setUsuarioLog: (state, payload) => {
            state.usuarioLog = payload
        },
        getUserLog(state){
            return state.usuarioLog
        },
        getRol(state){
            return state.esAdmin
        },
    },
    actions: {
        setRol: ({commit}, payload) => {
          commit('setRol', payload)
        }
    }
})
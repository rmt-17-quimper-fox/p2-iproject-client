import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    SET_IS_LOGIN (state, payload){
      state.isLogin = payload
    },
  },
  actions: {
  },
  modules: {
  }
})

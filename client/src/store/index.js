import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    populaterLoginForm: { email: '', password: ''},
  },
  mutations: {
    SET_IS_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload
    },
    SET_POPULATER_LOGIN_FORM(state, payload) {
      state.populaterLoginForm = payload
    },
  },
  actions: {
    register(_ ,registerData) {
      return axios({
        method: 'POST',
        url: '/register',
        data: registerData
      })
    },
    login(_, loginData) {
      return axios({
        method: 'POST',
        url: '/login',
        data: loginData
      })
    }
  },
  modules: {
  }
})

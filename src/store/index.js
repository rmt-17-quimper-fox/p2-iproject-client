import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {},
    isLogin : localStorage.access_token? true : false
  },
  mutations: {
    LOGIN(state,payload){
      state.user = payload
    },
    SETLOGIN(state){
      state.isLogin = true
    }
  },
  actions: {
    login(context){
      const user = context.state.user
      return axios({
        method : 'POST',
        url : '/login',
        data : user
      })
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {},
    isLogin : localStorage.access_token? true : false,
    userRegister : {}
  },
  mutations: {
    LOGIN(state,payload){
      state.user = payload
    },
    SETLOGIN(state){
      state.isLogin = true
    },
    REGISTER(state,payload){
      state.userRegister = payload
    },
    SET_LOGOUT(state){
      state.isLogin = false
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
    },
    register(context){
      const userRegister = context.state.userRegister
      return axios({
        method : 'POST',
        url : '/register',
        data : userRegister
      })
    },
    logoutUser(context){
      context.commit("SET_LOGOUT")
    },
  },
  modules: {
  }
})

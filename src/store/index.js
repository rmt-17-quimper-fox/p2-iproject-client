import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {},
    isLogin : localStorage.access_token? true : false,
    userRegister : {},
    listRoom : [],
    joinRoomId : '',
    passwordRoom : ''
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
    },
    FETCHROOM(state,payload){
      state.listRoom = payload
    },
    JOINROOM(state,payload){
      state.joinRoomId = payload.value
      state.passwordRoom = payload.password
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
    fetchRoom(context){
      axios({
        method : 'GET',
        url : '/rooms',
        headers : {
          access_token : localStorage.access_token
        },
      })
      .then(response => {
        console.log(response);
        const listRoom = response.data
        context.commit('FETCHROOM', listRoom)

      })
      .catch(err => {
        console.log(err.response);
      })
    },
    joinRoom(context){
      console.log('masuk');
      const joinRoomId = +context.state.joinRoomId
      console.log(joinRoomId);
      return axios({
        method : 'POST',
        url : `/rooms/${joinRoomId}`,
        headers : {
          access_token : localStorage.access_token
        },
        data : {passwordRoom : context.state.passwordRoom}
      })
    }
  },
  modules: {
  }
})

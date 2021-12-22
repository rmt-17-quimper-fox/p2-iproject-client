import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    populaterLoginForm: { email: '', password: ''},
    youtubeVideoId: []
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
    },
    retrivePassword(_, email) {
      return axios({
        method: 'POST',
        url: '/forgotpassword',
        data: { email }
      })
    },
    resetPassword(_, payload) {
      return axios({
        method: 'PATCH',
        url: '/resetpassword',
        data: payload
      })
    },
    getEdamameRecipe() {
      const options = {
        method: 'GET',
        url: '/edamame'
      };
      if(localStorage.access_token) {
        options.headers = { access_token: localStorage.access_token }
        // options.data = { size: 5, currentPage: 1 }
      }
      return axios(options)
    },
    getEdamameRecipeById(_, id) {
      return axios({
        method: 'GET',
        url: `/edamame/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    getYoutubeRecipe(_, searchText) {
      return axios({
        method: 'GET',
        url: '/youtube',
        headers: {
          access_token: localStorage.access_token
        },
        data: { searchText }
      })
    },
    getLeaderBoard() {
      return axios({
        method: 'GET',
        url: '/users',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    postRecipe(_, payload) {

    }
  },
  modules: {
  }
})

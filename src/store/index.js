import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: [],
    fruit: {},
    quiz: {},
    score: 0,
    catUrl: '',
    math: {}
  },
  mutations: {
    CHANGE_IS_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload;
    },
    CHANGE_FRUIT(state, payload) {
      state.fruit = payload
    },
    CHANGE_QUIZ(state, payload) {
      state.quiz = payload
    },
    CHANGE_SCORE(state, payload) {
      state.score = state.score + payload
    },
    CHANGE_CAT_URL(state, payload) {
      state.catUrl = payload
    },
    RESET_SCORE(state, payload) {
      state.score = payload
    },
    CHANGE_MATH(state, payload) {
      state.math = payload
    }
  },
  actions: {
    async register(context, payload) {
      try {
        const response = await axios({
          url: "https://ip-roby.herokuapp.com/register",
          method: "POST",
          data: {
            name: payload.name,
            email: payload.email,
            password: payload.password,
          },
        })
        swal.fire({
          icon: 'success',
          title: `Your account with id ${response.data.id} has been created`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        swal.fire({
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async login(context, payload) {
      try {
        const response = await axios({
          url: "https://ip-roby.herokuapp.com/login",
          method: "POST",
          data: {
            email: payload.email,
            password: payload.password,
          }
        })
        swal.fire({
          icon: 'success',
          title: `Login success`,
          showConfirmButton: false,
          timer: 1500
        })
        const token = response.data.access_token;
        localStorage.setItem("access_token", token)
        context.commit("CHANGE_IS_LOGGED_IN", true)
      } catch (err) {
        swal.fire({
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async googleLogin(context) {
      context.commit("CHANGE_IS_LOGGED_IN", true)
      swal.fire({
          icon: 'success',
          title: `Login success`,
          showConfirmButton: false,
          timer: 1500
      })
    },
    async getFruitId(context, payload) {
      try {
        const response = await axios({
          url: `https://ip-roby.herokuapp.com/fruits/${payload}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
          const result = response.data;
          context.commit("CHANGE_FRUIT", result)
      } catch (err) {
        swal.fire({
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async getRandomCat(context) {
      try {
        const response = await axios({
          url: `https://ip-roby.herokuapp.com/cats`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        context.commit('CHANGE_CAT_URL', response.data)
      } catch (err) {
        swal.fire({
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async getRandomMath(context) {
      try {
        const response = await axios({
          url: `https://ip-roby.herokuapp.com/mathematics`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        context.commit('CHANGE_MATH', response.data)
      } catch (err) {
        swal.fire({
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async getQuizId(context, payload) {
      try {
        const response = await axios({
          url: `https://ip-roby.herokuapp.com/fruits/quiz/${payload}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
          const result = response.data;
          context.commit("CHANGE_QUIZ", result)
      } catch (err) {
        swal.fire({
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async trueAnswer(context) {
      swal.fire({
        icon: 'success',
        title: `Jawaban kamu benar!`,
        showConfirmButton: false,
        timer: 1500
      })
      context.commit('CHANGE_SCORE', 1)
    },
    async wrongAnswer() {
      swal.fire({
        icon: 'error',
        title: `Jawaban kamu salah!`,
        showConfirmButton: false,
        timer: 1500
      })
    },
    async reset(context, payload) {
      context.commit('RESET_SCORE', payload)
    }
  },
  modules: {},
});

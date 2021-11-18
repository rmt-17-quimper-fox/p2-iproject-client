import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import Swal from 'sweetalert2'

Vue.use(Vuex)

const baseUrl = "https://zero-waste-iproject.herokuapp.com"
export default new Vuex.Store({
  state: {
    news: [],
    categories: [],
    orderById: [],
    isLoggedIn: false,
    orderId: null,
  },
  mutations: {
    LOGIN_STATUS(state, payload){
      state.isLoggedIn = payload
    },
    DATA_CATEGORIES(state, payload){
      state.categories = payload.categories
    },
    DATA_ORDER(state, payload){
      state.orderById = payload.orderById
    },
    ORDER_ID(state, payload){
      state.orderId = payload.orderId
    },
    DATA_NEWS(state, payload){
      state.news = payload.news
    }
  },
  actions: {
    async postLogin(context, payload){
      try {
        let response = await axios({
          url: baseUrl + "/login",
          method: "post",
          data: payload
        })
        localStorage.setItem("access_token", response.data.access_token)
        context.commit('LOGIN_STATUS', true)
        Swal.fire({
          title: `${response.data.message}`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      } 
      catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.error}`,
        })
      }
    },

    async registerButton(context, payload) {
      try{
          let response = await axios({
              method: "POST",
              url: baseUrl + "/register",
              data: payload
          })
          Swal.fire(`${response.data.message}`)
      }
      catch(err){
          Swal.fire(`${err.response.data.error}`)
      }
    },

    async getCategories(context){
      try{
        let response = await axios({
            method: "get",
            url: baseUrl + `/category`,
            headers: {
              access_token: localStorage.access_token
            }
        })
        let categories = response.data
        context.commit({
          type: "DATA_CATEGORIES",
          categories
        })
      }
      catch(err){
        Swal(`${err.response.data.error}`)
      }
    },

    async getNews(context){
      try {
        let response = await axios({
          method: 'get',
          url: baseUrl + '/news',
          headers: {
            access_token: localStorage.access_token
          }
        })
        let news = response.data
        context.commit({
          type: "DATA_NEWS",
          news
        }) 
      } 
      catch (err) {
        console.log(err)
      }
    },

    async postOrder(context, payload){
      try{
        let response = await axios({
            method: "POST",
            url: baseUrl + "/order",
            headers: {
                access_token: localStorage.access_token
            },
            data: payload,
            processData: false,
            contentType: false
          })
          let orderId = response.data.id
          context.commit({
            type: "ORDER_ID",
            orderId
          })
        }
        catch(err){
            console.log(err)
            // Swal(`${err.response.data.error}`)
        }
    },

    async getOrderById(context, payload){
      try {
        let response = await axios({
          method: "get",
          url: baseUrl + `/order/${payload}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        let orderById = response.data
        context.commit({
          type: "DATA_ORDER",
          orderById
        })
      } 
      catch (err) {
        console.log(err)
      }
    },

    async payment(){
      try {
        let response = await axios({
          method: 'post',
          url: baseUrl + `/pay`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        window.location.href = response.data.links[1].href
      } 
      catch (err) {
        console.log(err)
      }
    },

    async paymentSuccess({paymentId, token, PayerID}){
      try {
        let response = await axios({
          method: "get",
          url: baseUrl + `/success?paymentId=${paymentId}&token=${token}&PayerID=${PayerID}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        console.log(response)  
      } 
      catch (err) {
        console.log(err)
      }
    },

    logout(context){
        localStorage.clear()
        context.commit('LOGIN_STATUS', false)
    }
  },
  modules: {
  }
})

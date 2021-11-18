import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from '../apis/server.js'
export default new Vuex.Store({
  state: {
    isLogin: false,
    tweets: [],
    tweetLikes: 0,
    tweetReplay: 0,
    locationPost: {},
    quotes: "",
    weather: {}
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_TWEETS (state, payload) {
      state.tweets = payload
      state.tweetLikes = payload
      state.tweetReplay = payload
    },
    UP_LIKES (state, payload){
      state.tweetLikes = payload
    },
    SET_BOOKMARKS (state, payload) {
      state.bookmarks = payload
    },
    SET_LOCATIONPOST (state, payload) {
      state.locationPost = payload
    },
    SET_QUOTE (state, payload) {
      state.quotes = payload
    },
    SET_WEATHER (state, payload) {
      state.weather = payload
    },
  },
  actions: {
    doLogin (context, payload) {
      return axios({
        method: "POST",
        url: "/login",
        data: payload,
      })
    },
    doRegister (context, payload) {
      return axios({
        method: "POST",
        url: "/register",
        data: payload
      })
    },
    fetchTweet (context) {
      axios({
        method: "GET",
        url: `/tweets`,
        headers: {
          access_token: localStorage.getItem("access_token")
        },
      })
      .then (({data}) => {
        context.commit('SET_TWEETS', data)
      })
        .catch ((err) => {
        console.log(err.response.data);
      })
    },
    postTweet (context, payload) {
      // const tweets = context.state.tweets
      axios({
        method: "POST",
        url: `/tweets`,
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data : payload
      })
      .then (({data}) => {
        context.state.tweets
        console.log(`bookmarked`);
        console.log(data);
      })
      .catch ((err) => {
        console.log(err.response.data);
      })
    },
    getQuote (context) {
      // const tweets = context.state.tweets
      axios({
        method: "GET",
        url: `/quotes`,
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      .then (({data}) => {
        context.commit('SET_QUOTE', data)
        console.log(data);
      })
      .catch ((err) => {
        console.log(err.response.data);
      })
    },
    getWeather (context) {
      let baseURL = `https://api.weatherbit.io/v2.0/current?lat=${localStorage.lat}&lon=${localStorage.lng}&key=59ec7c2558ec45389c94d725310cc41e&include=minutely`
      axios({
        method: "GET",
        url: baseURL,
        
      })
      .then (({data}) => {
        context.commit('SET_WEATHER', data.data[0])
        // console.log("ini weather", data.data[0]);
      })
      .catch ((err) => {
        console.log(err.response.data);
      })
    },
  },
  modules: {
  }
})

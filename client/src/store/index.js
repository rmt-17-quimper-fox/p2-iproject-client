import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    featuredNews: [],
    newsData:[],
    bookmarkData:[],
    totalResults:0,
    randomCatUrl:""
  },
  mutations: {
    SET_IS_LOGIN (state, payload){
      state.isLogin = payload
    },
    SET_FEATURED_NEWS (state, payload){
      state.featuredNews = payload
    },
    SET_NEWS_DATA (state, payload){
      state.newsData = payload
    },
    SET_BOOKMARK_DATA (state, payload){
      state.bookmarkData = payload
    },
    SET_TOTAL_RESULTS (state, payload){
      state.totalResults = payload
    },
    SET_RANDOM_CAT(state, payload){
      state.randomCatUrl = payload
    }
  },
  actions: {
    fetchNewsList(context, payload){
      return axios({
        method: 'GET',
        url: 'https://api.currentsapi.services/v1/latest-news',
        params:payload
      })
    },
    searchNews(context, payload){
      return axios({
        method: 'GET',
        url: 'https://api.currentsapi.services/v1/search',
        params: payload
      })
    },
    fetchBookmark(){
      return axios({
        method: 'GET',
        url:'/bookmarks',
        headers:{
          access_token: `${localStorage.getItem('access_token')}`
        }
      })
    },
    postBookmark(context, payload){
      return axios({
        method:"POST",
        url:'/bookmarks',
        headers:{
          access_token: `${localStorage.getItem('access_token')}`
        },
        data: payload
      })
    },
    mojoLogin(context, payload){
      return axios({
        method: 'POST',
        url:'/mojologin',
        data: {
          access_token: payload
        }
      })
    },
    getRandomCat(){
      return axios({
        method: 'GET',
        url:'https://thatcopy.pw/catapi/rest/'
      })
    }
  },
  modules: {
  }
})

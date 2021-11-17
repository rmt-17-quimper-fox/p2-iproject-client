import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    featuredNews: [],
    newsData:[],
    bookmarkData:[]
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
    }
  },
  actions: {
    fetchNewsList(){
      return axios({
        method: 'GET',
        url: 'https://newsapi.org/v2/top-headlines',
        params:{
          apiKey: '59f5d55a2cfa4c95b4966189fd0698a7',
          country: 'us',
          pageSize: 11
        }
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
    }
  },
  modules: {
  }
})

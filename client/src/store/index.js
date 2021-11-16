import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    featuredNews: [],
    newsData:[]
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
    }
  },
  modules: {
  }
})

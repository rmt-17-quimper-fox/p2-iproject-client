import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "../apis/axios.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    seriesList: [],
    seriePagination: {
      page: "",
      totalPages: "",
      totalResults: "",
    },
    viewedSerie: {},
    viewedSeason: {},
    tmdbPage: 1,
    page: 1,
    loading: false,
    watchList: [],
    searchQuery:''
  },
  mutations: {
    SET_LOGIN_STATUS(state, payload) {
      state.isLoggedIn = payload;
    },
    SET_SERIES(state, payload) {
      state.seriesList = payload.seriesList;
    },
    SET_SERIES_PAGINATION(state, payload) {
      state.seriePagination.page = payload.page;
      state.seriePagination.totalPages = payload.total_pages;
      state.seriePagination.totalResults = payload.total_results;
    },
    SET_VIEWED_SERIE(state, payload) {
      state.viewedSerie = payload;
    },
    SET_SEASON(state, payload) {
      state.viewedSeason = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_WATCHLIST(state, payload) {
      state.watchList = payload;
    },
    SET_SEARCH_QUERY(state, payload) {
      state.searchQuery = payload;
    },
  },
  actions: {
    async postRegister(context, payload) {
      return axiosInstance({
        method: "post",
        url: "/register",
        data: payload,
      });
    },
    async postLogin(context, payload) {
      return axiosInstance({
        method: "post",
        url: "/login",
        data: payload,
      });
    },
    async googleSignIn(context, payload) {
      return axiosInstance({
        method: "post",
        url: "/googleSignIn",
        data: { google_token: payload },
      });
    },
    fetchSeries(context) {
      // context.commit('SET_LOADING',false)
      axiosInstance({
        method: "get",
        url: "/series" + location.search,
      })
        .then(({ data }) => {
          // context.commit('SET_LOADING',true)
          context.commit("SET_SERIES", data);
          context.commit("SET_SERIES_PAGINATION", data);
        })
        .catch((err) => {
          context.commit("SET_SERIES", []);
          console.log(err.response);
        });
    },
    async fetchSingleSerie(context, payload) {
      return axiosInstance({
        method: "get",
        url: `/series/${payload.id}`,
      });
    },
    fetchSeasonDetails(context, payload) {
      axiosInstance({
        method: "get",
        url: `/series/${payload.seriesId}/season/${payload.seasonId}`,
      })
        .then(({ data }) => {
          context.commit("SET_SEASON", data);
        })
        .catch((err) => {
          context.commit("SET_SEASON", []);
          console.log(err.response);
        });
    },
    fetchWatchlist(context) {
      axiosInstance({
        method: "get",
        url: `/watchlist`,
        headers: { access_token: localStorage.access_token },
      })
        .then(({ data }) => {
          context.commit("SET_WATCHLIST", data);
        })
        .catch((err) => {
          context.commit("SET_WATCHLIST", []);
          console.log(err.response);
        });
    },
    async addToWatchList(context, payload) {
      const serialId = +payload;
      return axiosInstance({
        method: "post",
        url: `/watchlist/${serialId}`,
        headers: { access_token: localStorage.access_token },
      });
    },
    async removeSerie(context,payload){
      return axiosInstance({
        method: 'delete',
        url:`/watchlist/${payload}`,
        headers: { access_token: localStorage.access_token },
      })
    },
  },
  modules: {},
});

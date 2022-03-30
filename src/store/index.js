import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    charts: '',
    patients: [],
    patientDetails: [],
    patientId: undefined
  },
  mutations: {
    "SET_NEWS"(state, payload) {
      state.news = payload.news
    },
    "SET_CHARTS"(state, payload) {
      state.charts = payload.charts.url
    },
    "SET_PATIENTS"(state, payload) {
      state.patients = payload.patients
    },
    "GET_ID"(state, payload) {
      state.patientId = payload
    },
    "SET_PATIENTDETAILS"(state, payload) {
      state.patientDetails = payload.patientDetails
    }
  },
  actions: {
    async fetchNews(context) {
      let url = "https://arcane-anchorage-95490.herokuapp.com/get-news"
      let resp = await axios.get(url)
      let news = resp.data.articles
      context.commit("SET_NEWS", { news })
    },
    async fetchCharts(context) {
      let url = "https://arcane-anchorage-95490.herokuapp.com/get-charts"
      let resp = await axios.get(url)
      let charts = resp.data
      context.commit("SET_CHARTS", { charts })
    },
    async fetchPatients(context) {
      let url = "https://arcane-anchorage-95490.herokuapp.com/patients"
      let resp = await axios.get(url, { headers: { access_token: localStorage.access_token } })
      let patients = resp.data
      context.commit("SET_PATIENTS", { patients })
    },
    async fetchPatientDetails(context) {
      console.log(this.state.patientId);
      let url = `https://arcane-anchorage-95490.herokuapp.com/patients/${this.state.patientId}`
      let resp = await axios.get(url, { headers: { access_token: localStorage.access_token } })
      console.log(resp.data);
      let patientDetails = resp.data
      context.commit("SET_PATIENTDETAILS", { patientDetails })
    }
  },
  modules: {
  }
})

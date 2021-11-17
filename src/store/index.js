import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    parties: [],
  },
  mutations: {
    SET_IS_LOGGED(state, payload) {
      state.isLogged = payload;
    },
    SET_PARTIES(state, payload) {
      state.parties = payload;
    },
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/login",
          method: "POST",
          data: payload,
        })
          .then(({ data }) => {
            context.commit("SET_IS_LOGGED", true);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    register(_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: "register",
          method: "POST",
          data: payload,
        })
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchParties(context) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/party",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then(({ data }) => {
            context.commit("SET_PARTIES", data);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    createParty(_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/party",
          method: "POST",
          data: payload,
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then((res) => {
            console.log(res.data);
            resolve(res);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
  },
  modules: {},
});

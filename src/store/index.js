import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    brands: [],
    shoes: [],
    carts: [],
    city: [],
  },
  mutations: {
    LOGIN_PAGE(state, payload) {
      state.loggedIn = payload;
    },
    FETCH_BRANDS(state, payload) {
      state.brands = payload;
    },
    FETCH_SHOES(state, payload) {
      state.shoes = payload;
    },
    FETCH_CARTS(state, payload) {
      state.carts = payload;
    },
    FETCH_CITY(state, payload) {
      state.city = payload;
    },
  },
  actions: {
    async loginPage(context, payload) {
      try {
        const response = await axios({
          url: `http://localhost:3000/login`,
          method: 'POST',
          data: payload,
        });
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('id', response.data.id);
        context.commit('LOGIN_PAGE', true);
        Swal.fire({
          icon: 'success',
          title: 'Yeaay...',
          text: 'Login Success',
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
        });
      }
    },
    async logout(context) {
      context.commit('LOGIN_PAGE', false);
    },
    async registerPage(context, payload) {
      try {
        const response = await axios({
          url: 'http://localhost:3000/register',
          method: 'POST',
          data: payload,
        });
        localStorage.setItem('access_token', response.data.access_token);
        console.log(response.data);
        context.commit('LOGIN_PAGE', true);
        Swal.fire({
          icon: 'success',
          title: 'Yeaay...',
          text: 'Register Success',
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
        });
      }
    },
    async fetchBrands(context) {
      try {
        const response = await axios({
          url: 'http://localhost:3000/brands',
          method: 'GET',
        });
        const dataBrands = response.data;
        context.commit('FETCH_BRANDS', dataBrands);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchShoes(context, payload) {
      try {
        const response = await axios({
          url: 'http://localhost:3000/shoes',
          method: 'GET',
          params: {
            name: payload || '',
          },
        });
        const dataShoes = response.data;
        context.commit('FETCH_SHOES', dataShoes);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCarts(context) {
      try {
        const response = await axios({
          url: 'http://localhost:3000/carts',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });
        const dataCarts = response.data;
        context.commit('FETCH_CARTS', dataCarts);
      } catch (error) {
        console.log(error);
      }
    },
    async postCart(context, payload) {
      try {
        const ShoeId = payload.ShoeId;

        const response = await axios({
          url: `http://localhost:3000/carts/${ShoeId}`,
          method: 'POST',
          data: payload,
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Yeaay...',
          text: 'Your item has been added to carts',
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
        });
      }
    },
    async cancelCart(context, payload) {
      try {
        const ShoeId = payload;

        const response = await axios({
          url: `http://localhost:3000/carts/${ShoeId}`,
          method: 'DELETE',
          data: payload,
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });
        Swal.fire({
          icon: 'success',
          title: 'Yeaay...',
          text: response.data.message,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async patchStock(context, payload) {
      try {
        const id = payload.id;
        const stock = payload.stock;
        const response = await axios({
          url: `http://localhost:3000/shoes/${id}`,
          method: 'PATCH',
          data: { stock },
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async fetchCity(context) {
      try {
        const response = await axios({
          url: `http://localhost:3000/rajaOngkir
          `,
          method: 'GET',
        });

        const dataCity = response.data;
        context.commit('FETCH_CITY', dataCity);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  modules: {},
});

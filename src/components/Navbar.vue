<template>
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" href="#" to="/">Riten.co</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              href="#"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item" v-if="loggedIn">
            <router-link
              class="nav-link active"
              aria-current="page"
              href="#"
              to="/mycart"
              >My Cart</router-link
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="search"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            @click.prevent="searchButton"
          >
            Search
          </button>
        </form>
        <div class="d-flex" style="padding-left: 1vh" v-if="!loggedIn">
          <button class="btn btn-outline-primary" @click.prevent="login">
            Login
          </button>
        </div>
        <div class="d-flex" style="padding-left: 1vh" v-if="loggedIn">
          <button class="btn btn-outline-danger" @click.prevent="logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'Navbar',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    logout() {
      this.$store.dispatch('logout');
      localStorage.clear();
      Swal.fire({
        icon: 'success',
        title: 'Yeaay...',
        text: 'You are already Logout',
      });
      this.$router.push({ name: 'Home' });
    },
    searchButton() {
      const search = this.search;

      this.$store.dispatch('fetchShoes', search);
    },
  },
};
</script>

<style></style>

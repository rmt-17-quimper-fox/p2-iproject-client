<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarCenteredExample"
        aria-controls="navbarCenteredExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarCenteredExample"
      >
        <!-- Left links -->
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <!-- <li class="nav-item" v-if="alreadyLogin">
            <router-link 
              class="nav-link active" to="/bookmark"
              >Bookmark</router-link
            >
          </li> -->
          <li class="nav-item" v-if="!alreadyLogin">
            <router-link
              class="nav-link active"
              tabindex="-1"
              aria-disabled="true"
              to="/login"
              >Login</router-link
            >
          </li>
          <li class="nav-item" v-if="alreadyLogin">
            <router-link
              @click.native="doLogout()"
              class="nav-link active"
              tabindex="-1"
              aria-disabled="true"
              to="/login"
              >Logout</router-link
            >
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    doLogout () {
      localStorage.clear();
      this.$store.commit('SET_ISLOGIN', false)
      this.$router.push('/login')
    },
  },
  computed: {
    alreadyLogin() {
      return this.$store.state.isLogin
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('SET_ISLOGIN', true)
    }
  },
};
</script>

<style>
</style>
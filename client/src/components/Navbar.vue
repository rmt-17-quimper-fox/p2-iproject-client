<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
     <router-link to="/" class="navbar-brand">NewSource</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="isLoggedIn === false">
          <router-link to="/login" class="nav-link active">Login</router-link>
           </li>
          <li class="nav-item" v-if="isLoggedIn === false">
            <router-link to="/register" class="nav-link active">Register</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn === true">
            <a class="nav-link active" href="" @click.prevent="logout" >Logout</a>
          </li>
        </ul>
        <router-link to="/bookmarks" href="" class="nav-link active" v-if="isLoggedIn === true">MyBookmark</router-link>
        <span class="navbar-text" v-if="isLoggedIn === true">
          admin@admin.com
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: "Navbar",
    data(){
      return{

      }
    },
    computed:{
      isLoggedIn(){
        return this.$store.state.isLogin
      },
    },
    methods:{
      logout(){
        localStorage.clear();
        sessionStorage.clear();
        this.$store.commit("SET_IS_LOGIN", false)
        this.$swal('Logout success')
      }
    },
}
</script>

<style>

</style>
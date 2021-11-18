<template>
    <div>
      <nav class="nav-option">
        <div class="wrapper">
            <div class="logo">
                <a
                  style="text-decoration: none;     font-size: 50px;
                  font-weight: 800;
                  float: left;
                  color: #FD6F96;
                  transition: 0.3s;"
                >
                #TempatBermain
                </a>
            </div>
        </div>
    </nav>
      <div
      class="container card"
      style="width: 25rem; opacity: 0.8; margin-top: 3%; padding-bottom: 0.1%; font-family: 'Comic Neue', cursive;"
      @submit.prevent="postLogin"
      >
      <br />
        <h1 class="text-center text-dark">LOGIN</h1>
        <form class="d-flex justify-content-center flex-column page">
          <div class="row">
            <div class="form-group" style="margin-top: 10px">
              <label for="email" class="text-dark">Email</label>
              <input v-model="credential.email" type="email" class="form-control input-register" />
            </div>
            <div class="form-group" style="margin-top: 10px">
              <label for="password" class="text-dark">Password</label>
              <input v-model="credential.password" type="password" class="form-control input-register" />
            </div>
          </div>
          <br />
            <ruesable-button></ruesable-button>
            <button
            style="width: 12.5rem; margin-top: 24px; margin-left: 5rem; margin-right: 5rem"      
            class="bi bi-google btn btn-outline-secondary"
            @click.prevent="postGoogleLogin"
            >
            Use google account
            </button>
        </form>
        <p style="margin: 0; padding: 0; margin-top: 20px; margin-bottom: 0px">Register new account <a @click.prevent="toRegister" href="#" style="text-decoration: none; color: #6F69AC;">here</a></p>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import RuesableButton from './RuesableButton.vue';
import { mapActions } from 'vuex'

export default {
  components: { RuesableButton },
  name: "Login",
      data() {
    return {
      credential: {
        email: "",
        password: "",
      },
    };
  },
    methods: {
    ...mapActions(["login", "googleLogin"]),
    async postLogin() {
      await this.login(this.credential);
      this.$router.push({ name: "Home" })
    },
    async toRegister() {
      this.$router.push({ name: "Register" })
    },
    async postGoogleLogin() {
      try {
        const googleUser = await this.$gAuth.signIn()
        const token = googleUser.getAuthResponse().id_token;
        const response = await axios({
          url: "https://ip-roby.herokuapp.com/googleLogin",
          method: "POST",
          data: {
            google_access_token: token
          }
        })
        localStorage.setItem('access_token', response.data.access_token)
        this.googleLogin()
        this.$router.push({ name: "Home" })
      } catch (err) {
        console.log(err.response.data)
      }
    },
    async toLogin() {
      this.$router.push({ name: "Login" })
    },
  },
};
</script>

<style>
</style>
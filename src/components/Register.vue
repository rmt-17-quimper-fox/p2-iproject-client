<template>
    <div>
      <nav class="nav-option">
        <div class="wrapper">
            <div class="logo">
                <a style="text-decoration: none;" href="#" @click.prevent="toLogin">#TempatBermain</a>
            </div>
        </div>
      </nav>
      <div
      class="container card"
      style="width: 25rem; opacity: 0.8; margin-top: 3%; padding-bottom: 0.5%; font-family: 'Comic Neue', cursive;"
      @submit.prevent="postRegister"
      >
      <br />
        <h1 class="text-center text-dark">REGISTER</h1>
        <form class="d-flex justify-content-center flex-column page">
          <div class="row">
            <div class="form-group" style="margin-top: 10px">
              <label for="username" class="text-dark">Username</label>
              <input type="text" v-model="credential.name" class="form-control input-register" />
            </div>
            <div class="form-group" style="margin-top: 10px">
              <label for="email" class="text-dark">Email</label>
              <input type="email" v-model="credential.email" class="form-control input-register" />
            </div>
            <div class="form-group" style="margin-top: 10px">
              <label for="password" class="text-dark">Password</label>
              <input type="password" v-model="credential.password" class="form-control input-register" />
            </div>
          </div>
          <br />
            <ruesable-button></ruesable-button>
        </form>
        <p style="margin: 0; padding: 0; margin-top: 20px; margin-bottom: 0px">If you already have an account, click <a @click.prevent="toLogin" href="#" style="text-decoration: none; color: #6F69AC;">here</a></p>
      </div>
    </div>
</template>

<script>
import RuesableButton from './RuesableButton.vue';
import { mapActions } from "vuex";

export default {
  components: { RuesableButton },
  name: "Register",
    data() {
    return {
      credential: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
    methods: {
    ...mapActions(["register"]),
    async postRegister() {
      await this.register(this.credential);
      this.$router.push({ name: "Login" })
    },
    async toLogin() {
      this.$router.replace({ name: "Login" })
    },
  },
};
</script>

<style>
</style>
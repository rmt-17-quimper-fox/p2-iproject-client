<template>
  <div id="login-form" class="wrap">
    <div class="container">
      <center>
        <div
          class="card shadow"
          style="
            background-color: rgba(233, 233, 233, 0.973);
            width: 30rem;
            padding-top: 10vh;
            padding-bottom: 10vh;
            margin-top: 5%;
          "
        >
          <div class="justify-content-center">
            <div class="col-sm-6">
              <h4 class="card-title" style="padding-bottom: 40px">
                Login Page
              </h4>

              <form>
                <div class="mb-3">
                  <label for="inputEmail" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    name="inputEmail"
                    placeholder="email address"
                    v-model="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="inputPassword" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="inputPassword"
                    placeholder="password"
                    v-model="password"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click.prevent="loginButton"
                >
                  Login
                </button>
              </form>
              <p>Don't have an account yet?</p>
              <router-link href="#" id="sign-up" to="/register"
                >Signup</router-link
              >

              <p>or login with</p>
              <div id="firebaseui-auth-container"></div>
            </div>
          </div>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';

import { auth } from 'firebaseui';
import axios from 'axios';

export default {
  name: 'Login',
  computed: {
    isLoggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  mounted() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCYddnRICqYBhxuV_NPasa4y6IJn6G-iKQ',
      authDomain: 'iproject-71f4c.firebaseapp.com',
      projectId: 'iproject-71f4c',
      storageBucket: 'iproject-71f4c.appspot.com',
      messagingSenderId: '57476022832',
      appId: '1:57476022832:web:25f80386129c6886f063f5',
      measurementId: 'G-LFWWXPKCV1',
    };
    const app = initializeApp(firebaseConfig);

    const auth2 = getAuth(app);
    var ui = new auth.AuthUI(auth2);
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          console.log(redirectUrl);

          axios({
            url: 'http://localhost:3000/firebase-login',
            methods: 'POST',
            data: authResult.user.email,
          })
            .then((data) => {
              // localStorage.setItem('access_token', data.access_token);
              console.log(data);
            })
            .catch((err) => {
              console.log(err.response);
            });

          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return false;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          // document.getElementById('loader').style.display = 'none';
        },
      },
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
      ],
      // Other config options...
    });
  },
  methods: {
    async loginButton() {
      const obj = {
        email: this.email,
        password: this.password,
      };

      await this.$store.dispatch('loginPage', obj);

      if (this.isLoggedIn) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style></style>

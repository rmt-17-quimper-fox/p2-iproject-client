<template>
<div id="intro">
    <div class="container">
        <div class="row justify-content-center my-5">  
            <div class="col-sm-10 col-md-8 col-lg-6 mt-5">
                <div class="shadow-lg rounded">
                    <div class="card text-center">
                        <div class="card-body">
                            <form class="form-signin" method="post" @submit.prevent="loginButton">
                            <img src="https://ik.imagekit.io/fjaskqdnu0xp/WELCOME_TO_ZERO_qUu2ZK_qmdg.png?updatedAt=1637069459935" alt="" width="300" height="300">
                            <input v-model="email" type="email" id="login-email" class="form-control" placeholder="Email address" required=""><br>
                            <input v-model="password" type="password" id="login-password" class="form-control" placeholder="Password" required="">
                            <div class="checkbox mb-3">
                            </div>
                            <button class="btn btn-sm btn-light btn-block mt-5 mb-2" type="submit"><h3 class="text-dark">Sign in</h3></button>
                            <p class="small fw-bold mt-2 pt-1 mb-0 text-white">Don't have an account? <router-link to="/register" id="register-link"
                               class="link-danger text-warning">Register here</router-link></p>
                                <h6 class="text-white text-center my-3">OR</h6>
                            </form>
                            <div class="row justify-content-center my-3">
                            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                            </div>
                            <p class="mt-5 mb-3 text-light">© Hactiv8 - brorp</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import axios from "axios";
import Swal from "sweetalert2"
export default {
  name: 'Login',
  components: {
      GoogleLogin
    },
    data(){
      return{
        params: {
            client_id: "979459015479-lufji34ucml3sb057u1srga7bshrfrid.apps.googleusercontent.com"
        },
        renderParams: {
            width: 250,
            height: 50,
            longtitle: true
        },
        email: "",
        password: '',
      }
    },
    methods: {
      async loginButton(){
          await this.$store.dispatch('postLogin', {
            email: this.email,
            password: this.password
          })
          if(localStorage.access_token){
            this.$router.push('/home')
          }
      },

      async onSuccess (googleUser) {
        try {
          const id_token = googleUser.getAuthResponse().id_token
          let response = await axios({
            url: "https://zero-waste-iproject.herokuapp.com/googlelogin",
            method: "post",
            data: {id_token}
          })
          localStorage.setItem("access_token", response.data.access_token)
          if(localStorage.access_token){
            this.$router.push('/home')
            this.$store.commit("LOGIN_STATUS", true)
          }
          Swal.fire({
            title: `${response.data.message}`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        } 
        catch (err) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.error}`,
          })
        }
      },
    }
}
</script>
<style scoped>
.card {
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 0px 20px 0 rgba(0,0,0,0.2);
    background-color: rgba(0,0,0,0.2);
    transition: 0.3s;
 }
</style>

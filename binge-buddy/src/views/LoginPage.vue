<template>
    <div>
    <!-- Start Breadcrumbs -->
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">Login</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- start login section -->
    <section class="login section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div class="form-head">
              <h4 class="title">Login</h4>
              <form>
                <div class="form-group">
                  <label>Username or email</label>
                  <input v-model="email" name="email" type="email" />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input v-model="password" name="password" type="password" />
                </div>
                <div class="button">
                  <button @click.prevent="postLogin" type="button" class="btn">
                    Login
                  </button>
                </div>
                <div class="alt-option">
                  <span>Or</span>
                </div>
                <p class="outer-link">
                  Sign In with Your Google Account
                  <br /><br />
                </p>
                <center>
                  <div class="socila-login">
                    <ul>
                      <li>
                        <GoogleLogin
                          class="google"
                          :params="params"
                          :onSuccess="onSuccess"
                          :onFailure="onFailure"
                          :renderParams="renderParams"
                        >
                        </GoogleLogin>
                      </li>
                    </ul>
                  </div>
                </center>
                <p class="outer-link">
                  Don't have an account?
                  <router-link to="/register">Register here</router-link>
                </p>
                <p class="outer-link">
                  Back to <router-link to="/">Home</router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end login section -->
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "854083833946-htca8lv8t7vhnl5dadal69qvifldoajc.apps.googleusercontent.com",
      },
      renderParams: {
        width: 350,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    postLogin() {
      let payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("postLogin", payload)
        .then(({ data }) => {
          this.$router.push("/series").catch(()=>{})
          localStorage.setItem("access_token", data.access_token);
          this.$store.commit("SET_LOGIN_STATUS", true);
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: data.message,
            text: data.email,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
            showCloseButton: true,
            showConfirmButton: false,
          });
        });
    },
    onSuccess(googleUser) {
      var google_token = googleUser.getAuthResponse().id_token;
      const payload = google_token;
      this.$store.dispatch("googleSignIn", payload)
      .then(({ data }) => {
          this.$router.push("/series").catch(()=>{});
          localStorage.setItem("access_token", data.access_token);
          this.$store.commit("SET_LOGIN_STATUS", true);
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: data.message,
            text: data.email,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
            showCloseButton: true,
            showConfirmButton: false,
          });
        });
    },
    onFailure(googleUser) {
      console.log(googleUser, "DARI GOOGLE FAILURE");
    },
  },
}
</script>

<style>

</style>
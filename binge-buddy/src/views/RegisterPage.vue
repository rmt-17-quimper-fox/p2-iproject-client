<template>
  <div>
          <!-- Start Breadcrumbs -->
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">Registration</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>Registration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- start Registration section -->
    <section class="login registration section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div class="form-head">
              <h4 class="title">Registration</h4>
              <form>
                <p class="outer-link">
                  Register with Your Google Account
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
                <div class="alt-option">
                  <span>Or</span>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input v-model="email" name="email" type="email" />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input v-model="password" name="password" type="password" />
                </div>
                <div class="button">
                  <button @click="postRegister" type="button" class="btn">
                    Register
                  </button>
                </div>
                <p class="outer-link">
                  Already have an account?
                  <router-link to="/login">Login Now</router-link>
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
    <!-- End Registration section -->
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "RegisterPage",
  components: {
    GoogleLogin,
  },
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
  methods: {
    postRegister() {
      let payload = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("postRegister", payload)
        .then(({ data }) => {
          this.$router.push("/login").catch(()=>{})
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
          console.log(err);
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
    onFailure(googleUser) {
      console.log(googleUser, "DARI GOOGLE FAILURE");
    },
  },
};
</script>


<style>

</style>
<template>
  <div class="background">
    <div class="body">
      <div class="container">
        <form @submit.prevent="toLogin" class="form-Login">
          <p id="title">Login</p>
          <label>Email:</label><br />
          <input type="email" name="email" v-model="email" /><br /><br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            v-model="password"
          /><br /><br />
          <div style="text-align: left">
            <center>
              <button class="btn-sd">Login</button>
            </center>
          </div>
        </form>
        <div style="margin-top: 1em; text-align: center">
          <div id="to-signup">
            <p>
              Don't have account?
              <button @click="toRegister" type="button" class="btn-gr">
                Sign-up here
              </button>
            </p>
          </div>
        </div>
        <center>
          <GoogleLogin
            :params="params"
            :onSuccess="onSuccess"
            :onFailure="onFailure"
            :renderParams="renderParams"
          ></GoogleLogin
          ><br />
          <a @click="goToHome">
            <img
              src="https://i.ibb.co/5nmYHbf/1024px-Facebook-Home-logo-svg.png"
              alt="home"
              style="width: 42px; height: 42px"
            />
          </a>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import axios from "axios";

export default {
  name: "Login",
  components: { GoogleLogin },
  data: function () {
    return {
      params: {
        client_id:
          "130915091584-nkeah9r7afr7c6i0hcg9m2e1qmaapan9.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
      email: "",
      password: "",
    };
  },
  methods: {
    toLogin: function () {
      axios({
        method: "post",
        url: "https://arcane-anchorage-95490.herokuapp.com/login",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("role", data.role);
          localStorage.setItem("access_token", data.access_token);
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          this.$toastr.error(err.response.data.message);
          console.log(err);
        });
    },
    toRegister: function () {
      this.$router.push({ path: "/register" });
    },
    goToHome: function () {
      this.$router.push({ path: "/" });
    },
    onSuccess: function (googleUser) {
      const id_token = googleUser.getAuthResponse().id_token;
      axios({
        method: "POST",
        url: `https://arcane-anchorage-95490.herokuapp.com/google-signin`,
        data: {
          id_token,
        },
      })
        .then(({ data }) => {
          this.$router.push({ path: "/" });
          localStorage.setItem("access_token", data.access_token);
        })
        .catch((err) => {
          this.$toastr.error(err.response.data.message);
          console.log(err.response.data.message);
        });
    },
    onFailure(googleUser) {
      this.$toastr.error("Failed to get token");
      console.log("Failed to get token", googleUser);
    },
  },
};
</script>
<style scoped>
button {
  height: 40px;
  cursor: pointer;
}

a {
  cursor: pointer;
}

.btn-sd {
  width: 100%;
  background-color: rgb(56, 156, 243);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1em;
}

.btn-gr {
  background-color: #17d868;
  border: none;
  border-radius: 5px;
  color: #fff;
}

#title {
  font-size: 2em;
}

.form-Login > input,
.form-Login > select {
  margin: 5px 0px;
  padding: 5px;
  width: 98%;
  height: 30px;
  border: solid 1px gray;
}

.body {
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  margin-left: 550px;
}

.container {
  width: 50%;
  height: fit-content;
  padding: 40px;
  margin-top: 80px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}

.background {
  height: 98vh;
  width: 99vw;
  background-image: url("https://i.ibb.co/L0fzzNY/Untitled-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
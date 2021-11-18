<template>
<div class="background">
  <div class="body">
    <div class="container">
      <form @submit.prevent="toLogin" class="form-Login">
        <p id="title">Sign Up</p>
        <label>Email:</label><br />
        <input type="email" name="email" v-model="email" />
        <label>Password:</label>
        <input type="password" name="password" v-model="password" /><br />
        <label>Username:</label><br />
        <input type="text" name="username" v-model="username" />
        <label>Address:</label>
        <input type="text" name="phoneNumber" v-model="phoneNumber" /><br />
        <br />
        <div style="text-align: left">
          <button class="btn-sd">Sign Up</button>
        </div>
      </form>
          <div style="margin-top: 1em; text-align: center">
        <div id="to-signup">
          <p>
            Back to login page?
            <button @click="toLoginPage" type="button" class="btn-gr">
             back to login
            </button>
          </p>
        </div>
         </div>
      <center>
      <a @click="goToHome">
          <img
            src="https://i.ibb.co/5nmYHbf/1024px-Facebook-Home-logo-svg.png"
            alt="home"
            style="width: 42px; height: 42px"
          />
        </a></center>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
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
        url: "https://arcane-anchorage-95490.herokuapp.com/register",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.$router.push({ path: "/login" });
        })
        .catch(err => {
          this.$toastr.error(err.response.data.message);
          console.log(err);
        });
    },
    toLoginPage: function () {
      this.$router.push({ path: "/login" });
    },
    goToHome: function () {
      this.$router.push({ path: "/" });
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
  margin-top: 50px;
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
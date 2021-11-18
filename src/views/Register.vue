<template>
  <div id="register-form" class="wrap">
    <div class="container">
      <center>
        <div
          class="card shadow"
          style="
            background-color: rgba(233, 233, 233, 0.973);
            width: 30rem;
            padding-top: 5vh;
            padding-bottom: 8vh;
            margin-top: 5%;
          "
        >
          <div class="justify-content-center">
            <div class="col-sm-6">
              <h4 class="card-title" style="padding-bottom: 30px">Register</h4>

              <form @submit.prevent="registerButton">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                    v-model="username"
                  />
                </div>
                <div class="mb-3">
                  <label for="synopsis" class="form-label">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="regisEmail"
                    name="regisEmail"
                    placeholder="Email Address"
                    v-model="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="regisPassword" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="regisPassword"
                    name="regisPassword"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    v-model="address"
                  />
                </div>
                <div class="mb-3" style="padding-bottom: 1vh">
                  <label for="phoneNumber" class="form-label"
                    >Phone Number</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    v-model="phoneNumber"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              <br />
              <button
                id="btn-back-register"
                class="btn btn-primary"
                @click.prevent="backToLogin"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  computed: {
    isLoggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      address: '',
      phoneNumber: '',
    };
  },
  methods: {
    backToLogin() {
      this.$router.push('/login');
    },
    async registerButton() {
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
        address: this.address,
        phoneNumber: this.phoneNumber,
      };

      await this.$store.dispatch('registerPage', newUser);
      if (this.isLoggedIn) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style></style>

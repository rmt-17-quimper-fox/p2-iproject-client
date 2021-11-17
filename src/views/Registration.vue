<template>
  <div class="container-fluid registration-page">
    <div
      class="
        registration-box
        position-absolute
        top-50
        start-50
        translate-middle
      "
    >
      <h1 class="text-center mb-5">SIGN UP</h1>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >username</label
          >
          <input
            type="text"
            class="form-control"
            placeholder="JohnDoe"
            v-model="name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Password</label
          >
          <input
            type="password"
            class="form-control"
            placeholder="********"
            v-model="password"
          />
        </div>
        <div class="mb-3 mt-4">
          <select
            v-model="rank"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected value="">Select Your Rank</option>
            <option value="herald">Herald</option>
            <option value="guardian">Guardian <img src="" alt="" /></option>
            <option value="crusader">Crusader</option>
            <option value="archon">Archon</option>
            <option value="legend">Legend</option>
            <option value="ancient">Ancient</option>
            <option value="divine">Divine</option>
            <option value="immortal">Immortal</option>
          </select>
        </div>
        <div class="d-grid gap-2 mt-5">
          <button class="btn submit-registration" type="submit">Sign Up</button>
        </div>
      </form>
      <div class="mt-4">
        <p>
          Already a member?
          <a href="" @click.prevent="toLogin" class="link-primary"
            >sign in here</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      rank: "",
    };
  },
  methods: {
    register() {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        rank: this.rank,
      };
      this.$store
        .dispatch("register", payload)
        .then(() => {
          this.$router.push("login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toLogin() {
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.registration-page {
  height: 100vh;
  background: rgba(0, 0, 0, 0.7) url("../assets/login-background.jpg");
  background-size: cover;
  background-blend-mode: darken;
}
.registration-box {
  width: 500px;
  height: 700px;
  padding: 50px;
  color: #fbfbfb;
  background-color: rgba(139, 138, 169, 0.3);
}
.submit-registration {
  background-color: #5f59f8;
  color: #fbfbfb;
}
</style>

<template>
  <div class="container-fluid login-page">
    <div class="login-box position-absolute top-50 start-50 translate-middle">
      <h1 class="text-center mb-5">LOGIN</h1>
      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Password</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="e.g*****"
          />
        </div>
        <div class="d-grid gap-2 mt-5">
          <button class="btn submit-login" type="button">Sign In</button>
        </div>
      </form>
      <div class="mt-4">
        <p>
          Dont have an account? <a href="" class="link-primary">sign up here</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.login-page {
  height: 100vh;
  background: rgba(0, 0, 0, 0.7) url("../assets/login-background.jpg");
  background-size: cover;
  background-blend-mode: darken;
}
.login-box {
  width: 500px;
  height: 700px;
  padding: 50px;
  color: #fbfbfb;
  background-color: rgba(139, 138, 169, 0.3);
}
.submit-login {
  background-color: #5f59f8;
  color: #fbfbfb;
}
</style>

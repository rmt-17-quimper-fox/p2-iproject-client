<template>
   <div class="login">
    <!-- <h1>This is Login Page</h1> -->
    <div class="container-fluid ps-md-0">
  <div class="row g-0">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4"><strong>Login</strong></h3>
                  <p>Welcome Back!</p>

              <!-- Sign In Form -->
              <form @submit.prevent="login">
                <div class="form-floating mb-3">
                  <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid">
                  <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                  <div class="text-center">
                    <p>Don't have an account? <a class="small" @click="toSignUp" href="#">Register here</a></p>
                    
                  </div>
                  <br>
                   <div class="text-center">
                     <p>Want to search the accommodation first?   <a class="small" @click="toHomeUnregister"  href="#">Back to Home</a></p>
                  
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
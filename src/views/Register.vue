<template>
<div>
    <div class="container">
        <div class="row justify-content-center my-5">  
            <div class="col-sm-10 col-md-8 col-lg-6 mt-5">
                <div class="shadow-lg rounded">
                    <div class="card text-center">
                        <div class="card-body">
                            <form class="form-signin" method="post" @submit.prevent="signUp">
                            <img src="https://ik.imagekit.io/fjaskqdnu0xp/WELCOME_TO_ZERO__8__lsZQ5qUvQ.png?updatedAt=1637186174562" alt="" width="300" height="300">
                            <input v-model="email" type="email" id="login-email" class="form-control" placeholder="Email address" required=""><br>
                            <input v-model="password" type="password" id="login-password" class="form-control" placeholder="Password" required="">
                            <div class="checkbox mb-3">
                            </div>
                            <button class="btn btn-sm btn-light btn-block mt-5 mb-2" type="submit"><h3 class="text-dark">Sign up</h3></button>
                            </form>
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
export default {
    name: "Register",
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
      async signUp(){
        await this.$store.dispatch('registerButton', {
          email: this.email,
          password: this.password,
          username: this.username
        })
        await this.$router.push('/')
      }
    },
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
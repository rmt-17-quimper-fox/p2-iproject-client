<template>
    <div>
         <h1>Login</h1>
         <section id="form-login" class="wrapper vh-100">
        <div class="container d-flex justify-content-center align-items-center h-100">
        <div class="card mb-3" style="max-width: 540px">
            <form action="" @submit.prevent="loginUser">
            <div class="row g-0">
                <div class="col-md-4">
                <img
                    src=""
                    class="img-fluid rounded-start"
                    style="margin-top : 50px; margin-left : 10px"
                    alt=""
                />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Login Branded Hackthings</h5>
                    <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input
                        v-model="email"
                        type="email"
                        class="form-control"
                        id="email-form-login"
                        placeholder="email@mail.com"
                    />
                    </div>
                    <div class="mb-3">
                    <label class="form-label"
                        >Password</label
                    >
                    <input
                        v-model="password"
                        type="password"
                        class="form-control"
                        id="password-form-login"
                        rows="3"
                        placeholder="******"
                    />
                    </div>
                    <div class="d-flex w-100 justify-content-between my-3">
                    <!-- <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin> -->
                    <!-- <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin> -->
                    <!-- <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin> -->
                    <input
                        class="btn btn-primary ml-2"
                        type="submit"
                        value="Login"
                    />
                    </div>
                    <router-link 
                    :to="{name : 'Register'}"
                    @click.prevent="changePage('register')"
                    class="link-primary cursor-pointer"
                    id="register-here"
                    >
                    Haven't got account?Register Here!
                    </router-link>
                </div>
                </div>
            </div>
            </form>
        </div>
        </div>
    </section>
    </div>
  
</template>

<script>
export default {
    name : 'Login',
    data : function(){
        return {
            email : '',
            password : ''
        }
    },
    methods : {
        loginUser(){
            const user = {
                email : this.email,
                password : this.password
            }

            this.$store.commit('LOGIN', user)
            this.$store.dispatch('login')
                .then(response => {
                    console.log(response);
                    const access_token = response.data.access_token
                    localStorage.setItem("access_token", access_token)
                    this.$store.commit('SETLOGIN')
                    this.$router.push({name : 'Home'})
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
    }
}
</script>

<style>

</style>
<template>
    <section class="vh-100 bg_custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="../assets/images/login.jpg" alt="login form" class="img-fluid"
                                    style="border-radius: 1rem 0 0 1rem;" />
                            </div>
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">

                                    <form @submit.prevent="doLogin">

                                        <div class="d-flex align-items-center mb-3 pb-1 ">
                                            <span class="h1 fw-bold mb-0">Sign In</span>
                                        </div>

                                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your
                                            account</h5>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="email" v-model="email"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="email">Email address</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="password" v-model="password"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="password">Password</label>
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                        </div>
                                        

                                        <!-- <GoogleLogin
                                            :params ='params'
                                            :renderParams ='renderParams'
                                            :onSuccess  = 'doSuccess'
                                            :onFailure = 'doFailure'
                                        ></GoogleLogin> -->
                                        <br>
                                        <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? 
                                            <router-link style="color: #393f81;" to="/register"><b>Register here</b></router-link>
                                        </p>
                                        <a href="#!" class="small text-muted">Terms of use.</a>
                                        <a href="#!" class="small text-muted">Privacy policy</a>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import GoogleLogin from 'vue-google-login'
export default {
    name: "Login",
    // components: {
    //     GoogleLogin,
    // },
    data: function () {
        return {
            email: "",
            password: "",
            params: {
                client_id:
                    '757517290102-s3igftm58rk9mi4l4a0aack39ertk5n5.apps.googleusercontent.com',
            },
            renderParams: {
                width: 350,
                height: 50,
                longtitle: true
            }
        }
    },
    methods : {
        doLogin: function () {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('doLogin', payload)
            .then(({data}) => {
                localStorage.setItem("access_token", data.access_token);
                this.$store.commit('SET_ISLOGIN', true)
                this.$router.push('/')
            })
            .catch ((err) => {
                console.log(err.response.data)
            })
        },
    }
}
</script>

<style>
.form-outline .form-control {
    min-height: auto;
    padding: 0.33;
    border: 0;
    background: #eee;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
</style>
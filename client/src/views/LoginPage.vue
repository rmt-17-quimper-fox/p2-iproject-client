<template>
<!-- Login Form -->
<div class="container" style="font-size:xx-medium">
    <div class="row mt-5">
    <div class="row mt-5"></div>
    <div class="row mt-5"></div>
    <div class="row mt-5"></div>
        <div class="col-6 card p-4 justify-content-center">
            <div class="row px-3"><h2>Login</h2></div>
            <div class="px-3"><p>Login to your account</p></div>
            <div class="row">
                <form class="form-group p-4">
                    <div>
                        <label>Email</label>
                        <input class="form-control mt-2" type="text" v-model="email">
                    </div>
                    <div>
                        <label class="mt-3" for="">Password</label>
                        <input class="form-control mt-2" type="password" v-model="password">
                    </div>
                    <div class="row mt-3 p-3">
                        <div class="col-6">
                            <div class="row">
                                <button class="btn btn-primary" @click.prevent="login">Login</button>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <router-link class="link-primary" to="/register">Forgot password ?</router-link>
                        <p class="mt-3">Haven't an account yet ? <router-link class="link-primary" to="/register">Register</router-link> </p>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-6">
            <div class="row card h-100">
                <img class="mt-5" src="@/assets/login.jpg" alt="">
            </div>
        </div>
    </div>
</div>
<!-- Login Form -->
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'Login-Page',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                const loginData = {
					email: this.email,
					password: this.password
                }
                const resp = await this.$store.dispatch('login', loginData)
                const access_token = resp.data.access_token
                localStorage.setItem('access_token', access_token)
				this.$store.commit('SET_IS_LOGGED_IN', true)
				Swal.fire({
                    icon: 'success',
                    title: 'Yeay You have logged in!!!',
                    text: 'Now you can access Tons of Recipes'
                })
				this.$router.push('/')
				this.email = ''
                this.password = ''
            } catch (error) {
				const message = error.response.data.message
				Swal.fire({
					icon: 'error',
					title: message,
					text: 'Input your email/password correctly!!!'
				})
				this.email = ''
				this.password = ''
            }
        }
	},
	created: function() {
		const { email, password } = this.$store.state.populaterLoginForm
		this.email = email
		this.password = password
	}
}
</script>

<style>

</style>
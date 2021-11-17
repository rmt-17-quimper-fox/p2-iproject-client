<template>
<div class="container" style="font-size:xx-medium">
    <div class="row mt-5"></div>
    <div class="row mt-5"></div>
    <div class="row mt-5"></div>
    <div class="row mt-5">
        <div class="col-6 card justify-content-center allign-items-center">
            <div class="row">
                <img src="@/assets/register.jpg" class="fill" alt="">
            </div>
        </div>
        <div class="col-6 card p-4 justify-content-center">
            <div class="row px-3"><h2>Register</h2></div>
            <div class="px-3"><p>Register for your account</p></div>
            <div class="row">
                <form class="form-group p-4" @submit.prevent="register">
                    <div>
                        <label for="">Username</label>
                        <input class="form-control mt-2" type="text" v-model="username">
                    </div>
                    <div>
                        <label for="">Email</label>
                        <input class="form-control mt-2" type="text" v-model="email">
                    </div>
                    <div>
                        <label class="mt-3" for="">Password</label>
                        <input class="form-control mt-2" type="password" v-model="password">
                    </div>
                    <div class="row mt-3 p-3">
                        <div class="col-6">
                            <div class="row">
                                <button class="btn btn-primary" type="submit">Register</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="mt-3">Already Haven an account ? <router-link class="link-primary" to="/login">Login</router-link> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'Register-Page',
    data: function() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async register() {
            try {
                const registerData = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
                const resp = await this.$store.dispatch('register', registerData)
                Swal.fire({
                    icon: 'success',
                    title: 'Your account has been created',
                    text: 'Now you can access full service of account!'
                })
                this.$store.commit('SET_POPULATER_LOGIN_FORM', {
                    email: this.email,
                    password: this.password
                })
                this.$router.push('/login')
                this.username = ''
                this.email = ''
                this.password = ''
            } catch (error) {
                const { message } = error.response.data
                Swal.fire({
                    icon: 'error',
                    title: message,
                    text: 'Input registration form correctly!!!'
                })
                this.username = ''
                this.email = ''
                this.password = ''
            }
        }
    },
    created: function() {
        this.$store.commit('SET_POPULATER_LOGIN_FORM', { email: '', password: ''})
    }
}
</script>

<style>

</style>
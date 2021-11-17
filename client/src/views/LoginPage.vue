<template>
<!-- Login Form -->
<div class="container" style="font-size:xx-medium">
    <div class="row mt-5">
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
export default {
    name: 'Login-Page'
}
</script>

<style>

</style>
<template>
<!-- Register Form -->
<div class="container" style="font-size:xx-medium">
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
                    <div>
                        <label class="mt-3" for="">Phone Number</label>
                        <input class="form-control mt-2" type="text" v-model="phoneNumber">
                    </div>
                    <div>
                        <label class="mt-3" for="">Address</label>
                        <input class="form-control mt-2" type="text" v-model="address">
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
<!-- Register Form -->  
</template>

<script>
export default {
    name: 'Register-Page'
}
</script>

<style>

</style>
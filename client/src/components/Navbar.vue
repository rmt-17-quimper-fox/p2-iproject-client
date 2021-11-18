<template>
<div>
<div class="d-flex justify-content-center">
        <img src="@/assets/Resep-Kita.png" alt="logo" width="150px" @click="toHome"/>
    </div>
    <nav class="navbar navbar-light d-flex justify-content-center" style="background-color: #6166B3;">
        <router-link class="btn btn-light me-3 my-2" to="/forum">Forum</router-link>
        <router-link class="btn btn-light me-3 my-2" to="/leaderboard">Leader Board</router-link>
        <router-link class="btn btn-light me-3 my-2" v-if="!isLoggedIn" to="/register">Register</router-link>
        <router-link class="btn btn-light me-3 my-2" v-if="!isLoggedIn" to="/login">Login</router-link>
        <button class="btn btn-light" v-if="isLoggedIn" @click="logout">Logout</button>
    </nav>
    <div class="row mt-5" v-if="isLoggedIn && this.$route.name === 'Home-Page'">
        <div class="d-flex justify-content-center">
            <div class="form-floating me-3">
                <input class="form-control" id="floatingInput" placeholder="what do you want to search ?" style="width: 600px; height: 55px;">
                <label for="floatingInput">what do you want to search ?</label>
            </div>
            <button class="btn btn-primary" style="width: 100px;">Search</button>
        </div>
        <div class="row mt-4">
        <div class="d-flex justify-content-center">
            <div class="col-1 mx-4">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Meal Type</option>
                    <option value="1">Sarapan</option>
                    <option value="2">Makan siang</option>
                    <option value="3">Makan malam</option>
                </select>
            </div>
            <div class="col-1 mx-4">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Cuisine Type</option>
                    <option value="1">Makanan Asia</option>
                    <option value="2">Makanan Eropa</option>
                    <option value="3">Makanan Anak Kos</option>
                </select>
            </div>
            <div class="col-1 mx-4">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Diet Type</option>
                    <option value="1">High-Fiber</option>
                    <option value="2">Low-fat</option>
                    <option value="3">Vegan</option>
                </select>
            </div>
        </div>
    </div>
    </div>
    <div class="row mt-5" v-if="!isLoggedIn">
        <div class="d-flex justify-content-center">
            <div class="d-flex align-items-start flex-column">
                <h1>Choose Recipe You Want</h1>
                <h5 class="ms-3">Get 1000++ recipes for your daily or business</h5>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
        isLoggedIn: function() {
            return this.$store.state.isLoggedIn
        }
    },
    methods: {
        logout() {
            this.$store.commit('SET_IS_LOGGED_IN', false)
            localStorage.removeItem('access_token')
            this.$router.push('/login')
        },
        toHome() {
            this.$router.push('/')
        }
    },
}
</script>

<style>

</style>
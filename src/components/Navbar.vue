<template>
    <nav class="nav-option">
        <div class="wrapper">
            <div class="logo">
                <a style="text-decoration: none;" href="#" @click.prevent="home">#TempatBermain</a>
            </div>
            <div class="menu">
                <ul>
                    <li>
                        <a href="#" @click.prevent="home">Home</a>
                    </li>
                    <li>
                        <a href="#" @click.prevent="about">About</a>
                    </li>
                    <li>
                        <a href="#" @click.prevent="logout">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'Navbar',
    computed: {
        ...mapState(["isLoggedIn"]),
    },
    methods: {
        ...mapMutations({
            changeIsLoggedIn: "CHANGE_IS_LOGGED_IN",
        }),
        async logout() {
            localStorage.clear();
            this.changeIsLoggedIn(false);
            this.$swal.fire({
                icon: 'success',
                title: `Logout success`,
                showConfirmButton: false,
                timer: 1500
            })
            this.$router.push({ name: "Login" });
        },
        async home() {
            this.$router.push({ name: "Home" });
        },
        async about() {
            this.$router.push({ name: "About" });
        },
    },
}
</script>

<style>

</style>
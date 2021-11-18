<template>
    <div>
        <navbar></navbar>
        <div class="wrapper">
            <section id="home">
                <img class="image" src="https://image.freepik.com/free-vector/open-book-icons-mathematics_74440-842.jpg">
                <div class="column" style="padding-top: 8%">
                    <p class="description" style="color: #FD6F96;">
                        Kamu sudah berusaha dengan sangat baik!
                    </p>
                    <h2>
                    <p class="description-2">
                        Dalam 30 detik, kamu berhasil memberikan {{ score }} jawaban tepat.
                    </p>
                    </h2>
                    <p>
                    <a @click.prevent="home" style="text-decoration: none;" href="#" class="button-submit">
                        Kembali ke Home
                    </a>
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import { mapState, mapActions } from "vuex"

export default {
    name: "ScoreMath",
    components: {
        Navbar
    },
    computed: {
        ...mapState(["score"]),
    },
    methods: {
        ...mapActions(["reset"]),
        async home() {
            this.reset(0)
            this.$router.push({ name: "Home" });
        },
    }
}

</script>

<style>

</style>
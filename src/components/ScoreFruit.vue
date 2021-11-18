<template>
    <div>
        <navbar></navbar>
        <div class="wrapper">
            <section id="home">
                <img class="image" src="https://image.freepik.com/free-vector/canadian-girl-wearing-cap-holding-melon-standing-position_1308-48138.jpg">
                <div class="column" style="padding-top: 8%">
                    <p class="description" style="color: #FD6F96;">
                        Kamu sudah berusaha dengan sangat baik!
                    </p>
                    <h2>
                    <p class="description-2">
                        Dari total 5 pertanyaan, kamu berhasil memberikan {{ score }} jawaban tepat.
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
    name: "ScoreFruit",
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
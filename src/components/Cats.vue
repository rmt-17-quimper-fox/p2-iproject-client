<template>
    <div>
        <navbar></navbar>
        <div class="card-q" style="font-family: 'Comic Neue', cursive; display: block; margin-left: auto; margin-right: auto; margin-bottom: 0px; margin-top: 100px;">

            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img :src="catUrl.url" style="width:500px;height:500px;">
                </div>
            </div>
            <div class="flip-card-inner1">
                <div style="margin-top: 5%">
                <button style="position: absolute; left: 0" class="btn-card" @click.prevent="next">NEXT</button>
                <button class="btn-card" style="position: absolute; right: 0" @click.prevent="home">EXIT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from './Navbar.vue';

export default {
    name: 'Cats',
    components: {
        Navbar,
    },
    computed: {
        ...mapState(["catUrl"]),
    },
    methods: {
        ...mapActions(["getRandomCat"]),
        async home() {
            this.$router.push({ name: "Home" });
        },
        async next() {
            await this.getRandomCat()
        }
    },
    async created() {
        await this.getRandomCat()
    }
}
</script>

<style>

</style>
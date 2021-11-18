<template>
  <div>
    <div class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block">404</span>
                <div class="mb-4 lead">The page you are looking for was not found. here enjoy a random cat picture!</div>
                <div class="justify-content-center">
                    <img :src="randomCatUrl" alt="random cat" style="width:50vw">
                </div>
                <router-link to="/" class="navbar-brand"><a href="">back to home</a></router-link>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
    name:"NotFound",
    computed:{
        randomCatUrl(){
            return this.$store.state.randomCatUrl
        }
    },
    methods:{
        getRandomCat(){
            this.$store.dispatch("getRandomCat")
            .then(({ data }) => {
                console.log(data.url)
                this.$store.commit("SET_RANDOM_CAT", data.url)
            })

        }
    },
    created(){
        this.getRandomCat()
    }
}
</script>

<style>

</style>
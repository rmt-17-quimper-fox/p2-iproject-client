<template>
<div>
  <nav-bar></nav-bar>
  <div class="container">
            <div class="card mb-5"
            v-for="el in news" :key="el.id">
                <img class="card-img-top" :src="el.urlToImage" alt="Card image cap" width="346" height="413">
                <div class="card-body">
                  <h3 class="card-title text-dark">{{el.title}}</h3>
                  <h6>by: {{el.author}} <span class="text-muted mx-5"><i>source: {{el.source.name}}</i></span></h6>
                  <p class="card-text">{{el.description}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
    name: "News",
    components: {
        NavBar
    },
    computed: {
        news(){
            return this.$store.state.news
        }
    },
    created(){
        this.$store.dispatch('getNews')
    }
}
</script>

<style>

</style>
<template>
<div class="container-fluid">
    <navbar></navbar>
    <div class="container">
        <div class="row my-3">
            <h1 class="my-5">Recipe Form</h1>
            <div class="col">
                <form action="">
                    <label style="font-size: 25px;">Recipe Name</label>
                    <div class="form-floating me-4 mt-2">
                        <input class="form-control" id="floatingInput" placeholder="what do you want to search ?" style="width: 600px; height: 55px;">
                        <label for="floatingInput">Your recipe name, be creative</label>
                    </div>
                    <div class="my-4">
                        <label for="formFile" class="form-label" style="font-size: 25px;">Recipe Photo</label>
                        <input class="form-control" type="file" id="formFile">
                    </div>
                    <div class="my-4">
                        <label for="exampleFormControlTextarea1" class="form-label" style="font-size: 25px;">Ingredients</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="my-4">
                        <label for="exampleFormControlTextarea1" class="form-label" style="font-size: 25px;">Instructions</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button class="btn btn-primary" style="width: 170px;">Post Recipe</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Post-Recipe-Page',
    components: { 
        Navbar 
    },
    methods: {

    },
    created: function() {
        if(localStorage.access_token) {
            this.$store.commit('SET_IS_LOGGED_IN', true)
        } else {
            this.$store.commit('SET_IS_LOGGED_IN', false)
        }
    }
}
</script>

<style>

</style>
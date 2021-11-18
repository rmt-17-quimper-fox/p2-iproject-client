<template>
<div class="container-fluid">
    <navbar></navbar>
    <div class="container">
        <div class="row mt-5">
        <recipe-card v-for="data in recipeData" :key="data.id"
        :id="data.id" :label="data.label" :cuisineType="data.cuisineType"
        :image="data.image" :ingredients="data.ingredientLines"></recipe-card>

        <!-- <recipe-card v-for="(data, idx) in recipeData" :key="idx"></recipe-card> -->
            <div class="d-flex justify-content-center" v-if="isLoggedIn">
                <nav class="row mt-5" aria-label="Page navigation example">
                    <ul class="pagination pagination-lg">
                        <li class="btn page-link">Previos</li>
                        <li class="page-item active"><span class="btn page-link" style="background-color: #6166B3;">1</span></li>
                        <li class=""><span class="btn page-link">2</span></li>
                        <li class=""><span class="btn page-link">3</span></li>
                        <li class="btn page-link">Next</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div v-if="!isLoggedIn">
        <div class="row my-5">
            <div class="col-5"><hr style="border-top: 5px solid #000000"></div>
            <div class="col-2"><h1>Benefit Join Us</h1></div>
            <div class="col-5"><hr style="border-top: 5px solid #000000"></div>
        </div>
        <div class="container mt-5">
            <div class="row d-flex align-items-center">
                <div class="col-4">
                    <img src="@/assets/Sharing.jpg" alt="" width="450px">
                </div>
                <div class="col-5 mt-3">
                    <div class="row">
                        <h1>Sharing Each Other</h1>
                        <p>You can let people know your recipes</p>
                    </div>
                </div>
            </div>
            <div class="row d-flex align-items-center">
                <div class="col-8">
                    <div class="row text-end">
                        <h1>Be Number One</h1>
                        <div class="col-7"></div>
                        <div class="col mt-3">
                            <p>Get point as many as possible from like of your friends</p>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <img src="@/assets/Compete.jpg" alt="" width="450px">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'
import Navbar from '@/components/Navbar.vue'
import RecipeCard from '@/components/RecipeCard.vue'
export default {
    name: 'Home-Page',
    components: {
        Navbar,
        RecipeCard
    },
    computed: {
        isLoggedIn: function() {
            return this.$store.state.isLoggedIn
        }
    },
    data: function() {
        return {
            recipeData: []
        }
    },
    created: async function() {
        try {
            if(localStorage.access_token) {
                this.$store.commit('SET_IS_LOGGED_IN', true)
            } else {
                this.$store.commit('SET_IS_LOGGED_IN', false)
            }
            const { data } = await this.$store.dispatch('getEdamameRecipe')
            console.log(data.data)
            this.recipeData = data.data
        } catch (error) {
            console.log(error.response);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something wrong, please refresh!'
            })
        }
    }
}
</script>

<style>

</style>
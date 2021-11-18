<template>
<div>
    <div class="row">
        <div class="col d-flex justify-content-center">
            <h1>{{ recipeDetail.label }}</h1>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col card mx-3 shadow p-3 mb-5 bg-body rounded">
            <img :src="recipeDetail.image" alt="">
        </div>
        <div class="col card shadow p-3 mb-5 bg-body rounded" style="height: 500px;">
            <div class="card-body container">
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <h3 class="card-title my-4">Health Labels:</h3>
                        </div>
                        <div class="row">
                            <ol class="list-group-numbered"> 
                                <li class="list-group-item" v-for="(data, idx) in label"
                                :key="idx">{{ data }}</li>
                            </ol>
                        </div>
                    </div>
                    <div class="col my-4">
                        <div class="row mb-3">
                            <h4>Meal Type:</h4><p>{{ recipeDetail.mealType[0] }}</p>
                        </div>
                        <div class="row">
                            <h4>Total Calories:</h4><p>{{ calories }} Kcal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
            <iframe class="embed-responsive-item me-5" :src="`https://www.youtube.com/embed/${youtubeVideoId[0]}`" frameborder="0" height="400px" width="600px"></iframe>
            <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${youtubeVideoId[1]}`" frameborder="0" height="400px" width="600px"></iframe>
        </div>
    </div>


    <!-- <div class="row">
        <div class="col d-flex justify-content-center">
            <h1>Indomie Rebus</h1>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col card mx-3 shadow p-3 mb-5 bg-body rounded">
            <img src="@/assets/indomie.jpg" alt="">
        </div>
        <div class="col card shadow p-3 mb-5 bg-body rounded" style="height: 500px;">
            <div class="card-body container">
                <div class="row">
                    <h3 class="card-title my-4">Cara Memasak:</h3>
                </div>
                <div class="row">
                    <ol class="list-group-numbered"> 
                        <li class="list-group-item">Beli mie di warung</li>
                        <li class="list-group-item">Panaskan Air</li>
                        <li class="list-group-item">Masukan mie ke air panas</li>
                        <li class="list-group-item">Sajikan di piring</li>
                        <li class="list-group-item">Silahkan menikmati</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
            <iframe class="embed-responsive-item me-5" :src="`https://www.youtube.com/embed/jPOxWOE-3Xk`" frameborder="0" height="400px" width="600px"></iframe>
            <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/jPOxWOE-3Xk`" frameborder="0" height="400px" width="600px"></iframe>
        </div>
    </div> -->
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'Detail-Content',
    computed: {
        label: function() {
            return this.recipeDetail.healthLabels.slice(0,8)
        },
        calories: function() {
            return Math.round(this.recipeDetail.calories)
        }
    },
    data: function() {
        return {
            recipeDetail: {},
            youtubeVideoId: []
        }
    },
    created: async function() {
        try {
            if(localStorage.access_token) {
                this.$store.commit('SET_IS_LOGGED_IN', true)
            } else {
                this.$store.commit('SET_IS_LOGGED_IN', false)
            }
            const id = this.$route.params.id
            const recipeById = await this.$store.dispatch('getEdamameRecipeById', id)
            const searchText = recipeById.data.label
            const videoRecipe = await this.$store.dispatch('getYoutubeRecipe', searchText)
            this.recipeDetail = recipeById.data
            this.youtubeVideoId = videoRecipe.data
        } catch (error) {
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
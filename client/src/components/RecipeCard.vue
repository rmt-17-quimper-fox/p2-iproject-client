<template>
<div class="col-4 card mx-5 shadow p-3 mb-5 bg-body rounded">
    <h2 class="my-3">{{ label }}</h2>
    <img :src="image" alt="">
    <h3><span class="badge bg-warning my-3">{{ cuisineType[0] }}</span></h3>
    <div class="card-body container">
        <div class="row">
            <h3 class="card-title my-4">Bahan:</h3>
        </div>
        <div class="row">
            <ul class="list-group-numbered"> 
                <li class="list-group-item" v-for="(data, idx) in ingredients"
                :key="idx+1">{{ data }}</li>
            </ul>
        </div>
    </div>
    <button class="btn btn-success" @click="detail">Detail</button>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'Recipe-Card',
    props: ['id', 'label', 'image', 'cuisineType', 'ingredients'],
    computed: {
        isLoggedIn: function() {
            return this.$store.state.isLoggedIn
        }
    },
    methods: {
        detail() {
            if(!this.isLoggedIn) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Haven\'t Logged in',
                    text: 'Please Login First to access that content!!!'
                })
                this.$router.push('/login')
            } else {
                this.$router.push(`/detail/${this.id}`)
            }
        }
    }
}
</script>

<style>

</style>
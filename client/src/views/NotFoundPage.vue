<template>
<div class="container">
    <div class="row d-flex align-items-center">
    <div class="col">
        <img src="https://ik.imagekit.io/nl1wr7kwfvn/3828537_b6zMmJ9E9n9.jpg?updatedAt=1636600452747" alt="" width="700px">
    </div>
    <div class="col">
        <div class="row">
        <h2 class="mt-5">Request can't be found</h2>
        <p>Make sure every request you input is already correct!</p>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    name: 'NotFound-Page',
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
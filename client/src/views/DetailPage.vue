<template>
<div class="container-fluid">
    <navbar></navbar>
    <div class="container">
        <div class="row mt-5">
            <detail-content></detail-content>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import DetailContent from '@/components/DetailContent.vue'
export default {
    name: 'Detail-Page',
    components: {
        Navbar,
        DetailContent
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
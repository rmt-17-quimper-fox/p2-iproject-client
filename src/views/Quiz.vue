<template>
    <div>
        <navbar></navbar>
        <card-quiz></card-quiz>
    </div>
</template>

<script>
import CardQuiz from '../components/CardQuiz.vue'
import Navbar from '../components/Navbar.vue'

export default {
    name: "Quiz",
    components: {
        CardQuiz,
        Navbar
    },
}
</script>

<style>

</style>
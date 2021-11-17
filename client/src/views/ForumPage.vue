<template>
<!-- Forum Page -->
<div class="container-fluid">
    <navbar></navbar>
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <button class="btn btn-primary" style="width: 200px;">Add</button>
            </div>
            <div class="col d-flex justify-content-center">
                <h1>Forum</h1>
            </div>
            <div class="col"></div>
        </div>
        <div class="row mt-5">
            <forum-card v-for="(data, idx) in forumData" :key="idx"></forum-card>
        </div>
    </div>
</div>
<!-- Forum Page -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ForumCard from '@/components/ForumCard.vue'
export default {
    name: 'Forum-Page',
    components: {
        Navbar,
        ForumCard
    },
    data: function() {
        return {
            forumData: ['1', '2', '3']
        }
    }
}
</script>

<style>

</style>
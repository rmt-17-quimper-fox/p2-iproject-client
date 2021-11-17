<template>
<!-- Detail Page -->
<div class="container-fluid">
    <navbar></navbar>
    <div class="container">
        <div class="row mt-5">
            <detail-content></detail-content>
        </div>
    </div>
</div>
<!-- Detail Page -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import DetailContent from '@/components/DetailContent.vue'
export default {
    name: 'Detail-Page',
    components: {
        Navbar,
        DetailContent
    }
}
</script>

<style>

</style>
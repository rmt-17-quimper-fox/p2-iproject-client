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
            <div class="container d-flex justify-content-center">
                <div class="card mb-3" style="max-width: 1000px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="@/assets/ketoprak.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container d-flex justify-content-center">
                <div class="card mb-3" style="max-width: 1000px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="@/assets/ketoprak.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container d-flex justify-content-center">
                <div class="card mb-3" style="max-width: 1000px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="@/assets/ketoprak.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Forum Page -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Forum-Page',
    components: {
        Navbar
    }
}
</script>

<style>

</style>
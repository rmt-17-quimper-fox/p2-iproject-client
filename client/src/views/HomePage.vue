<template>
<!-- Home Before Login -->
<div>
    <div class="container-fluid">
        <navbar></navbar>
        <div class="row mt-4">
            <div class="d-flex justify-content-center">
                <div class="col-1 mx-4">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Meal Type</option>
                        <option value="1">Sarapan</option>
                        <option value="2">Makan siang</option>
                        <option value="3">Makan malam</option>
                    </select>
                </div>
                <div class="col-1 mx-4">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Cuisine Type</option>
                        <option value="1">Makanan Asia</option>
                        <option value="2">Makanan Eropa</option>
                        <option value="3">Makanan Anak Kos</option>
                    </select>
                </div>
                <div class="col-1 mx-4">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Diet Type</option>
                        <option value="1">High-Fiber</option>
                        <option value="2">Low-fat</option>
                        <option value="3">Vegan</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mt-5">
                <div class="col card mx-5 shadow p-3 mb-5 bg-body rounded">
                    <h2 class="my-3">Ketoprak</h2>
                    <img src="@/assets/ketoprak.jpg" alt="">
                    <h3><span class="badge bg-warning my-3">Western</span></h3>
                    <div class="card-body container">
                        <div class="row">
                            <h3 class="card-title my-4">Bahan:</h3>
                        </div>
                        <div class="row">
                            <ol class="list-group-numbered"> 
                              <li class="list-group-item">Indomie 1 bungkus</li>
                              <li class="list-group-item">Telur 1 butir</li>
                              <li class="list-group-item">Air panas</li>
                              <li class="list-group-item">Tomat</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col card shadow p-3 mb-5 bg-body rounded">
                    <h2 class="my-3">Spaggeti</h2>
                    <img src="@/assets/spagetti.jpg" alt="">
                    <h3><span class="badge bg-warning my-3">Western</span></h3>
                </div>
                <div class="col card mx-5 shadow p-3 mb-5 bg-body rounded">
                    <h2 class="my-3">Indomie Rebus</h2>
                    <img src="@/assets/indomie.jpg" alt="">
                    <h3><span class="badge bg-success my-3">Anak Kos</span></h3>
                    <div class="card-body container">
                        <div class="row">
                            <h3 class="card-title my-4">Bahan:</h3>
                        </div>
                        <div class="row">
                            <ol class="list-group-numbered"> 
                              <li class="list-group-item">Indomie 1 bungkus</li>
                              <li class="list-group-item">Telur 1 butir</li>
                              <li class="list-group-item">Air panas</li>
                              <li class="list-group-item">Tomat</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
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
<!-- Home Before Login -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Home-Page',
    components: {
        Navbar
    }
}
</script>

<style>

</style>
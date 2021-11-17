<template>
<div>
    <div class="row">
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
            <iframe class="embed-responsive-item me-5" src="https://www.youtube.com/embed/wkg_AyHE82w" frameborder="0" height="400px" width="600px"></iframe>
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wkg_AyHE82w" frameborder="0" height="400px" width="600px"></iframe>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Detail-Content'
}
</script>

<style>

</style>
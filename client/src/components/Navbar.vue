<template>
<div>
<div class="d-flex justify-content-center">
        <img src="@/assets/Resep-Kita.png" alt="logo" width="150px" />
    </div>
    <nav class="navbar navbar-light d-flex justify-content-center" style="background-color: #6166B3;">
        <button class="btn btn-light me-3 my-2">Forum</button>
        <button class="btn btn-light me-3 my-2">Leader Board</button>
        <button class="btn btn-light me-3 my-2">Register</button>
        <button class="btn btn-light me-3 my-2">Login</button>
        <button class="btn btn-light">Logout</button>
    </nav>
    <div class="row mt-5">
        <div class="d-flex justify-content-center">
            <div class="form-floating me-3">
                <input class="form-control" id="floatingInput" placeholder="what do you want to search ?" style="width: 600px; height: 55px;">
                <label for="floatingInput">what do you want to search ?</label>
            </div>
            <button class="btn btn-primary" style="width: 100px;">Search</button>
        </div>
    </div>
    <div class="row mt-5">
        <div class="d-flex justify-content-center">
            <div class="d-flex align-items-start flex-column">
                <h1>Choose Recipe You Want</h1>
                <h5 class="ms-3">Get 1000++ recipes for your daily or business</h5>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>
<template>
<!-- Reset Password -->
<div class="container" style="font-size:xx-medium">
    <div class="row mt-5">
        <div class="col-3"></div>
        <div class="col-6 card p-4 justify-content-center">
            <div class="row px-3"><h2>Reset Password</h2></div>
            <div class="px-3"><p>Enter your new Password</p></div>
            <div class="row">
                <form class="form-group p-4">
                    <div>
                        <label>New Password</label>
                        <input class="form-control mt-2" type="text" v-model="email">
                    </div>
                    <div class="row mt-3 p-3">
                        <div class="col-6">
                            <div class="row">
                                <button class="btn btn-primary" @click.prevent="login">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
</div>
<!-- Reset Passoword -->
</template>

<script>
export default {
    name: 'Reset-Password-Page'
}
</script>

<style>

</style>
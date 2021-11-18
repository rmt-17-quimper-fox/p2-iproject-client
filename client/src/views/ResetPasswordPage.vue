<template>
<div class="container" style="font-size:xx-medium">
    <div class="row mt-5">
    <div class="row mt-5"></div>
    <div class="row mt-5"></div>
    <div class="row mt-5"></div>
        <div class="col-3"></div>
        <div class="col-6 card p-4 justify-content-center">
            <div class="row px-3"><h2>Reset Password</h2></div>
            <div class="px-3"><p>Enter your new Password</p></div>
            <div class="row">
                <form class="form-group p-4">
                    <div>
                        <label>New Password</label>
                        <input class="form-control mt-2" type="password" v-model="newPassword">
                    </div>
                    <div class="row mt-3 p-3">
                        <div class="col-6">
                            <div class="row">
                                <button class="btn btn-primary" @click.prevent="resetPassword">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'Reset-Password-Page',
    data: function() {
        return {
            newPassword: ''
        }
    },
    methods: {
        async resetPassword() {
            try {
                const payload = {
                    token: this.$route.params.token,
                    password: this.newPassword
                }
                const { data } = await this.$store.dispatch('resetPassword', payload)
                Swal.fire({
                    icon: 'success',
                    title: 'Success Update Password',
                    text: data.message
                })
                this.$router.push('/login')
				this.newPassword = ''
            } catch (error) {
                const message = error.response.data.message
				Swal.fire({
					icon: 'error',
					title: message,
					text: 'Input your new password correctly!!!'
				})
				this.password = ''
            }
        }
    }
}
</script>

<style>

</style>
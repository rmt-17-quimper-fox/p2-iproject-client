<template>
<div class="container" style="font-size:xx-medium">
    <div class="row mt-5">
        <div class="row mt-5"></div>
        <div class="row mt-5"></div>
        <div class="row mt-5"></div>
        <div class="col-3"></div>
        <div class="col-6 card p-4 justify-content-center">
            <div class="row px-3"><h2>Forgot Password</h2></div>
            <div class="px-3"><p>Enter your email to retrive the password back</p></div>
            <div class="row">
                <form class="form-group p-4">
                    <div>
                        <label>Email</label>
                        <input class="form-control mt-2" type="text" v-model="email">
                    </div>
                    <div class="row mt-3 p-3">
                        <div class="col-6">
                            <div class="row">
                                <button class="btn btn-primary" @click.prevent="retrivePassword">Send</button>
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
    name: 'Forget-Password-Page',
    data: function() {
        return {
            email: ''
        }
    },
    methods: {
        async retrivePassword() {
            try {
                const { data } =  await this.$store.dispatch('retrivePassword', this.email)
                Swal.fire({
                    icon: 'success',
                    title: 'Success Send Token',
                    text: data.message
                })
				this.$router.push('/login')
				this.email = ''
            } catch (error) {
                const message = error.response.data.message
				Swal.fire({
					icon: 'error',
					title: message,
					text: 'Input your email correctly!!!'
				})
				this.email = ''
            } 
        }
    }
}
</script>

<style>

</style>
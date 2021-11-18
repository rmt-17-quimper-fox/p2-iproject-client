<template>
    <div>
    <div class="container-fluid">
        <div class="row justify-content-center my-5">  
            <div class="col-sm-10 col-md-10 col-lg-10 mt-5">
                <div class="shadow-lg rounded">
                    <div class="card">
                        <div class="card-body text-center">
                            <h1 class="text-center mb-5">Payment Success!</h1>
                           <img src="https://ik.imagekit.io/fjaskqdnu0xp/WELCOME_TO_ZERO__7__f0F8FgfSz.png?updatedAt=1637175682388" 
                           height="200" width="200" class="mb-5">
                           <div class="text-center">
                           <router-link to="/home"><button class="btn btn-lg btn-primary"
                           >Back To Home
                           </button></router-link>
                           </div>
                        </div> 
                    </div>
                </div>
           </div>
         </div> 
     </div>                   
  </div>
</template>

<script>
export default {
    name: "Success",
    created(){
            console.log("asd")
            this.$store.dispatch('paymentSuccess', {
                paymentId: this.$route.query.paymentId,
                token: this.$route.query.token,
                PayerID: this.$route.query.PayerID,
            })
        }
}
</script>

<style>

</style>
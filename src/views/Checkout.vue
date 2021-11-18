<template>
  <div>
    <div class="container-fluid">
        <div class="row justify-content-center my-5">  
            <div class="col-sm-10 col-md-10 col-lg-10 mt-5">
                <div class="shadow-lg rounded">
                    <div class="card">
                        <div class="card-body"
                        v-for="order in orderById.order" :key="order.id">
                            <h1 class="text-center mb-5">Price offer:<br> IDR {{ orderById.price }}</h1>
                            <div class="row">
                                <div class="col text-right">
                                <img crossOrigin="anonymous"
                                :src="order.photo" alt="" width="300" height="300">
                                </div>
                                <div class="col text-left">
                                <h3 class="my-3">Order ID: {{ order.id }}</h3>
                                <h5 class="my-3">Sender: {{ order.sender }}</h5>
                                <h5 class="my-3">From: {{ order.address }}</h5>
                                <h5 class="my-3">Item Name: {{ order.itemName }}</h5>
                                <h5 class="my-3">Description: <br> {{ order.description }}</h5>
                                <h5 class="my-3">Weight: {{ order.weight }} Kg</h5>
                                </div> 
                           </div>
                           <h5 class="text-center mt-5">in order to complete your order <br>please pay a down payment with amount IDR 100000</h5>
                           <div class="text-center">
                           <button class="btn btn-lg btn-primary"
                           @click="payment">Pay with PayPal
                           </button>
                           <h5>or</h5>
                           <router-link to="/home"><button class="btn btn-lg btn-danger" align="center">Cancel Order
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
    name: "Checkout",
    methods: {
        payment(){
            this.$store.dispatch('payment')
        }
    },
    computed: {
        orderById(){
          return this.$store.state.orderById
        },
    },
    created(){
      this.$store.dispatch('getOrderById', this.$route.params.id)
    }
}
</script>

<style>

</style>
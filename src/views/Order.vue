<template>
<div>
  <nav-bar></nav-bar>
  <div class="form-body container-fluid">
    <div class="row justify-content-center">  
          <div class="col-sm-10 col-md-8 col-lg-6">
              <h1 class="text-center mb-5">Input Items Here</h1>
              <div class="shadow-lg rounded">
                <div class="card text-center">
            <form-order></form-order>
       </div>
    </div>
    </div>
</div>  
</div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FormOrder from '../components/FormOrder.vue'
export default {
    name: "Order",
    components: {
        NavBar,
        FormOrder
    },
}
</script>

<style scoped>
h1 { font-family: "Acme"; color: black; font-size: 50px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0}
</style>
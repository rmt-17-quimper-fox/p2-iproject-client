<template>
<div>

  <div id="app">
    <nav-bar-comp-vue/>
    <router-view/>
    <!-- ========================= scroll-top ========================= -->
    <a href="" class="scroll-top btn-hover">
        <i class="lni lni-chevron-up"></i></a>
          
  </div>
   <HFooter></HFooter>
</div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import NavBarCompVue from "./components/NavBarComp.vue"


export default ({
  name: "App",
  components:{
    NavBarCompVue,
    HFooter
  },created(){
    if (localStorage.access_token){ this.$store.commit('SET_LOGIN_STATUS',true)}
  }
})
</script>

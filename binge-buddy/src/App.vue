<template>
  <div id="app">
    <nav-bar-comp-vue/>
    <router-view/>
    <!-- ========================= scroll-top ========================= -->
    <a href="" class="scroll-top btn-hover">
        <i class="lni lni-chevron-up"></i></a>
  </div>
</template>

<script>
import NavBarCompVue from "./components/NavBarComp.vue"


export default ({
  name: "App",
  components:{
    NavBarCompVue
  },created(){
    if (localStorage.access_token){ this.$store.commit('SET_LOGIN_STATUS',true)}
  }
})
</script>

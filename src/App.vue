<template>
  <div id="app">
    <router-view class="login"/>
  </div>
</template>

<script>
export default {
  created(){
    if(localStorage.token){
      this.$store.commit("LOGIN_STATUS", true)
    }
  }
}
</script>
<style>
body, html {
  height: 100%;
}
h1 { font-family: "Acme"; font-size: 50px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0}
h3 { font-family: "Acme"; font-size: 48px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0;} 
h5 { font-family: "Acme"; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0;}
h6 { font-family: "Acme"; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0;}
::placeholder { font-family: "Acme"; font-size: 12px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0; margin-top: 0} 
</style>

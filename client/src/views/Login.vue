<template>
  <div>
    <div id="mojoauth-passwordless-form"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
      return{
      }
  },
  created(){
    const mojoauth = new window.MojoAuth("3129be04-cebd-4e8a-9114-6bd198dfef04");
        // Use signInWithEmailOTP() for authentication using Email OTP
    mojoauth.signInWithMagicLink().then(response => console.log(response));
  }
};
</script>

<style>
</style>
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
  methods:{
    mojoLogin(payload){
      this.$store.dispatch('mojoLogin', payload)
      .then(({data}) => {
        this.$swal("Login Success with mojo");
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("userEmail", data.email)
        this.$store.commit("SET_IS_LOGIN", true);
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  created(){
    const mojoauth = new window.MojoAuth("3129be04-cebd-4e8a-9114-6bd198dfef04");
        // Use signInWithEmailOTP() for authentication using Email OTP
    mojoauth.signInWithMagicLink()
    .then(response => {
      console.log(response)
      this.mojoLogin(response.oauth.access_token)
    });
  }
};
</script>

<style>
</style>
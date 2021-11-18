<template>
<div>
    <navbar/>
    <user v-if="active==false"></user>
    <admin v-if="active==true" ></admin>
<div class="background">
</div>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Admin from "../components/Admin.vue"
import User from '../components/User.vue'
// @ is an alias to /src

export default {
  name: "Home",
  data: function() {
    return {
      active: localStorage.role=='Admin'? true:false
    }
  },
  components: {
    Navbar,
    User,
    Admin
  },
};
</script>
<style scoped>
.background {
  height: 30vh;
  width: 99vw;
  margin-top: 50px;
  background-image: url("https://i.ibb.co/Z83Q50F/foo2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>

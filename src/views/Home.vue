<template>
  <div id="home-page">
    <Navbar />
    <router-view></router-view>
    <HFooter class="fixed-bottom" />
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
import Navbar from "../components/Navbar.vue";
import Swal from "sweetalert2";

export default {
  name: "Home",
  components: {
    HFooter,
    Navbar,
  },
  computed: {
    parties() {
      return this.$store.state.parties;
    },
  },
  created() {
    this.$store
      .dispatch("fetchParties")
      .then(() => {
        console.log("fetch parties success");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      });
  },
};
</script>
<style scoped>
#home-page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7) url("../assets/home-background.jpg");
  background-size: cover;
  background-blend-mode: darken;
}
</style>

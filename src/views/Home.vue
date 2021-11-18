<template>
  <div class="home">
    <navbar></navbar>
    <filter-home></filter-home>
    <div class="footer">
      <HFooter></HFooter>
    </div>
  </div>
</template>

<script>
import FilterHome from '../components/FilterHome.vue';
import Navbar from '../components/Navbar.vue';
import HFooter from 'vue-hacktiv8-footer';

// @ is an alias to /src

export default {
  name: 'Home',
  components: { Navbar, FilterHome, HFooter },
  created() {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('LOGIN_PAGE', true);
    }
  },
};
</script>

<style scoped>
.footer {
  bottom: 0;
  position: fixed;
  width: 100%;
}
</style>

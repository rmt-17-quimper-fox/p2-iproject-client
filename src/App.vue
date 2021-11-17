<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (!localStorage) {
      this.$store.commit("SET_IS_LOGGED", false);
    } else {
      this.$store.commit("SET_IS_LOGGED", true);
    }
  },
};
</script>

<style></style>

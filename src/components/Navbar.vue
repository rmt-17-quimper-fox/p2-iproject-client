<template>
  <nav class="d-flex justify-content-between mx-5 pt-4 fs-2">
    <div class="d-flex justify-content-around">
      <a class="mx-4" href="">Home</a>
      <a class="mx-4" href="">My Parties</a>
      <a class="mx-4" href="">Find Party</a>
    </div>
    <a href="" class="nav-item">logout</a>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Lobster&display=swap");
nav {
  color: #a39fa2;
  font-family: "Anton", sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

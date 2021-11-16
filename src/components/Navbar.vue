<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FindMe App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" @click="changePage('Home')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="changePage('ListRoom')">List Room</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="changePage('FormCreate')">Form Create Room</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="logout">Sign Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name : 'Navbar',
    methods : {
        changePage(value){
            this.$router.push({name : value})
        },
        logout(){
          localStorage.clear();
          this.$store.dispatch("logoutUser");
          this.$router.push({ name: "Login" });
        }
    }
}
</script>

<style>

</style>
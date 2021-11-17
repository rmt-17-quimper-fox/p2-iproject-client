<template>
  <nav class="d-flex justify-content-between mx-5 pt-4 fs-3">
    <div class="d-flex justify-content-around">
      <a @click.prevent="toLobby" class="mx-4" href="">Lobby</a>
      <a @click.prevent="toMyParties" class="mx-4" href="">My Parties</a>
      <a @click.prevent="toProfile" class="mx-4" href="">My Profile</a>
      <a @click.prevent="toCreateParty" class="mx-4" href="">+ Create Party</a>
    </div>
    <a href="" @click.prevent="logout" class="nav-item">logout</a>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    toProfile() {
      this.$router.push("/home/profile").catch(() => {});
    },
    toLobby() {
      this.$router.push("/home/lobby").catch(() => {});
    },
    toCreateParty() {
      this.$router.push("/home/createParty").catch(() => {});
    },
    toMyParties() {
      this.$router.push("/home/myparties").catch(() => {});
    },
  },
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

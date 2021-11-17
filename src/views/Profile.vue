<template>
  <div class="d-flex ms-5 flex-column page-title">
    <div class="text-uppercase text-center">
      <h1 class="slogan">
        find the best team <br />
        <span>maximize you performance</span>
      </h1>
    </div>
    <div class="mt-5 mb-3">
      <label for="">select your role</label>
    </div>
    <div class="d-flex justify-content-around role-container">
      <div class="role-card me-2">
        <a href=""><img src="../assets/midlaner.png" alt="" />Midlaner</a>
      </div>
      <div class="role-card me-2">
        <a href=""><img src="../assets/carry.png" alt="" />Carry</a>
      </div>
      <div class="role-card me-2">
        <a href=""><img src="../assets/offlaner.png" alt="" />Offlaner</a>
      </div>
      <div class="role-card me-2">
        <a href=""><img src="../assets/support.png" alt="" />Support</a>
      </div>
      <div class="role-card me-2">
        <a href=""
          ><img src="../assets/hard-support.png" alt="" />Hard Support</a
        >
      </div>
    </div>
    <div class="mt-5 mb-3">
      <label for="">select your rank</label>
    </div>
    <div class="d-flex justify-content-around rank-container">
      <a href=""><img src="../assets/herald.png" alt="" /></a>
      <a href=""><img src="../assets/guardian.png" alt="" /></a>
      <a href=""><img src="../assets/crusader.png" alt="" /></a>
      <a href=""><img src="../assets/archon.png" alt="" /></a>
      <a href=""><img src="../assets/legend.png" alt="" /></a>
      <a href=""><img src="../assets/ancient.png" alt="" /></a>
      <a href=""><img src="../assets/divine.png" alt="" /></a>
      <a href=""><img src="../assets/immortal.png" alt="" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Lobster&display=swap");
div {
  color: #fbfbfb;
  font-family: "Anton", sans-serif;
}
.slogan {
  font-size: 60px;
}
.slogan span {
  color: #a2181a;
}
.page-title {
  margin-top: 90px;
}
.role-card {
  width: auto;
  height: 170px;
  background-color: #121212;
}
.role-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
a {
  text-decoration: none;
  color: #a2181a;
}
.role-container {
  width: 80%;
}
.rank-container {
  width: 80%;
}
</style>

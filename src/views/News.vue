<template>
<div>
<navbar/>
    <div class="content-container">
      <div class="card" v-for="ne in news" :key="ne.id">
        <img :src="ne.urlToImage" class="photo" />
        <p style="margin-left: 1em;font-size:0.8em">{{ ne.title }}</p>
        <a style="margin-left:12px; text-decoration: none;" :href="ne.url" target="_blank">Selengkapnya..</a>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  name: "News",
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
  created() {
    this.$store.dispatch("fetchNews");
  },
};
</script>

<style scoped>
.content-container {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 8em;
  margin-left: 10em;
}

.card {
  width: 17vw;
  height: 43vh;
  margin: 1% 1%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  overflow: hidden;
}

button {
  width: 100px;
  height: 40px;
  margin-left: 35px;
  cursor: pointer;
}

.btn-sd {
  background-color: rgb(56, 156, 243);
  border: none;
  border-radius: 5px;
  color: #fff;
}

.delete {
  background-color: rgb(243, 56, 56);
  border: none;
  border-radius: 5px;
  color: #fff;
}

.photo {
  width: 90%;
  height: 60%;
  margin: 1em 1em 1em;
}

#next {
  display: flex;
  justify-content: end;
  margin-right: 30px;
  cursor: pointer;
}
</style>
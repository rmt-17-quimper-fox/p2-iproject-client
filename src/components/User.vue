<template>
  <div>
    <h2 style="text-align: center; margin-top: 100px">Booking Room</h2>
    <div class="content-containerw">
      <div class="card">
        <center>
          <img src="https://i.ibb.co/M2DYr9Y/Untitled-1.png" class="photo" />
          <div style="text-align: left">
            <button @click="toAddPage" style="margin-left: 80px" class="btn-sd">Booking</button>
          </div>
        </center>
      </div>
    </div>
    <news-card />
    <div>
      <a style="margin-left:82%; text-decoration: none;" href="/" target="_blank">Lebih banyak berita..</a>
      </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";
export default {
  components: { NewsCard },
  methods: {
    toAddPage: function() {
          this.$router.push({ path: "/new-patients" });
    }
  }
};
</script>

<style scoped>

.content-containerw {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 40%;
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
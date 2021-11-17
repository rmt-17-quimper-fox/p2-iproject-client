<template>
  <div class="row">
    <div
      v-for="serie in series"
      :key="serie.id"
      class="col-lg-3 col-md-6 col-12"
    >
      <!-- Start Single Item -->
      <div class="single-item-grid">
        <div class="image">
          <a @click.prevent="seeSerieDetail(serie.id)" href=""
            ><img :src="serie.imgURL" alt="Poster"
          /></a>
        </div>
        <div class="content">
          <a @click.prevent="seeSerieDetail(serie.id)" href="" class="tag"> Released In: {{ serie.releaseYear }}</a>
          <h3 class="title">
            <a @click.prevent="seeSerieDetail(serie.id)" href="">{{ serie.title }}</a>
          </h3>
          <p class="location">
            <a @click.prevent="seeSerieDetail(serie.id)" href="">
              Original Title: <br />{{ serie.originalTitle }}<br /><br />
              Origin: {{ serie.origin }}
            </a>
          </p>
          <ul class="info">
            <li class="price">Popularity: {{ serie.popularity }}</li>
          </ul>
        </div>
      </div>
      <!-- End Single Item -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SerieCardComp",
  computed: {
    series() {
      return this.$store.state.seriesList;
    },
  },
  methods: {
    seeSerieDetail(payload) {
      this.$router.push(`/series/${payload}`).catch(() => {});
    },
  },
};
</script>

<style>
</style>
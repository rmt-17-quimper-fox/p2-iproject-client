<template>
  <!-- Start Dashboard Section -->
  <section class="dashboard section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
          <div class="main-content">
            <div class="dashboard-block mt-0">
              <h3 class="block-title">{{ season.seasonTitle }}</h3>
              <!-- Start Items Area -->
              <div class="my-items">
                <!-- Start List Title -->
                <div class="item-list-title">
                  <div class="row align-items-center">
                    <div class="col-lg-1 col-md-1 col-12">
                      <p>Ep</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12">
                      <p>Title</p>
                    </div>
                    <div class="col-lg-7 col-md-7 col-12">
                      <p>Synopsis</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12 align-right">
                      <p>AirDate</p>
                    </div>
                  </div>
                </div>
                <!-- End List Title -->
                <div
                  class="single-item-list"
                  v-for="episode in season.episodes"
                  :key="episode.epsiodeNumber"
                >
                  <div class="row align-items-center">
                    <div class="col-lg-1 col-md-1 col-12">
                      <p>{{ episode.episodeNumber }}</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12">
                      <p>{{ episode.title }}</p>
                    </div>
                    <div class="col-lg-7 col-md-7 col-12">
                      <p>{{ episode.overview }}</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12 align-right">
                      <p>{{ episode.airDate }}</p>
                    </div>
                  </div>
                </div>
                <!-- End Single List -->
              </div>
              <!-- End Items Area -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Dashboard Section -->
</template>

<script>
export default {
  name: "SeriesSeasonComp",
  computed: {
    season() {
      return this.$store.state.viewedSeason;
    },
  },
  data() {
    return {
      seasonId: this.$route.params.seasonId,
    };
  },
  created() {
    const payload = {
      seriesId: this.$route.params.serieId,
      seasonId: this.$route.params.seasonId,
    };
    this.$store.dispatch("fetchSeasonDetails", payload);
  },
  updated() {
    const payload = {
      seriesId: this.$route.params.serieId,
      seasonId: this.$route.params.seasonId,
    };
    this.$store.dispatch("fetchSeasonDetails", payload);
  },
};
</script>

<style>
</style>
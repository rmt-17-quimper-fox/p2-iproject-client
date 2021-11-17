<template>
  <div>
    <!-- Start Breadcrumbs -->
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">Serie Details</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>Serie Details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- Start Item Details -->

    <section class="item-details section">
      <div class="container">
        <div class="top-area">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
              <div class="product-images">
                <main id="gallery">
                  <div class="main-img">
                    <img :src="serie.imgURL" id="current" alt="Serie Image" />
                  </div>
                </main>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
              <div class="product-info">
                <h2 class="price">{{ serie.title }}</h2>
                <div class="list-info">
                  <h4>Series Information</h4>
                  <table
                    style="width: 100%; max-column-width: 100%"
                    class="table-layout: fixed; word-wrap: break-word"
                  >
                    <tr>
                      <th>Original Title:</th>
                      <td>{{ serie.originalTitle }}</td>
                    </tr>
                    <tr>
                      <th>Creators:</th>
                      <td>{{ serie.createdBy }}</td>
                    </tr>
                    <tr>
                      <th>Genre:</th>
                      <td>{{ serie.genre }}</td>
                    </tr>
                    <tr>
                      <th>First Aired:</th>
                      <td>{{ serie.firstAired }}</td>
                    </tr>
                    <tr>
                      <th>Last Aired:</th>
                      <td>{{ serie.lastAired }}</td>
                    </tr>
                    <tr>
                      <th>Episodes:</th>
                      <td>{{ serie.numberOfEpisodes }} episode(s) in total</td>
                    </tr>
                    <tr>
                      <th>Seasons:</th>
                      <td>{{ serie.numberOfseasons }} season(s) in total</td>
                    </tr>
                    <tr>
                      <th>Season:</th>
                      <td>{{ serie.seasonsList }}</td>
                    </tr>
                    <tr>
                      <th>Status:</th>
                      <td>{{ serie.status }}</td>
                    </tr>
                    <tr>
                      <th>Home Page:</th>
                      <td>
                        <a :href="serie.homePage">{{ serie.homePage }}</a>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <th>Networks:</th>
                      <td v-for="network in serie.networks" :key="network.name">
                        <img
                          :src="network.logo"
                          id="current"
                          alt="Network Logo"
                          style="max-width: 100px; height: auto"
                        />
                      </td>
                    </tr>
                  </table>
                  <br />
                  <h4>Series Overview</h4>
                  <p>
                    {{ serie.overview }}
                  </p>
                  <br />
                  <h6>Tagline</h6>
                  <p>
                    {{ serie.tagline }}
                  </p>
                </div>
                <div class="contact-info">
                  <ul>
                    <li>
                      <div class="button">
                        <a
                          href=""
                          class="btn"
                          @click.prevent="addToWatchList(serie.id)"
                          ><i class="lni lni-heart"></i> Add To WatchList</a
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-details-blocks">
          <div class="row">
            <div class="col-lg-6 col-md-5 col-12">
              <!-- Start Single Block -->
              <div class="single-block description">
                <h3>Season List</h3>
                <p>Select Season to See Season Details</p>
                <br />
                <div
                  style="
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                  "
                >
                  <div
                    class="button"
                    v-for="season in serie.seasons"
                    :key="season.id"
                    style="
                      flex-basis: 25%;
                      margin-bottom: 25px;
                      min-width: 120px;
                      height: 50px;
                      text-align: center;
                      line-height: 1.1em;
                      font-size: 1.1em;
                    "
                  >
                    <router-link
                      :to="`/series/${serie.id}/season/${season.id}`"
                      class="btn"
                      >{{ season.seasonTitle }}</router-link
                    >
                  </div>
                </div>
              </div>
              <!-- End Single Block -->
            </div>
            <div class="col-lg-6 col-md-7 col-12">
              <div class="item-details-sidebar">
                <!-- Start Single Block -->
                <div class="single-block">
                  <h3>Watch Trailer</h3>
                  <center>
                    <iframe
                      width="560"
                      height="315"
                      :src="serie.trailer"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </center>
                </div>
                <!-- End Single Block -->
              </div>
            </div>
            <router-view />
          </div>
        </div>
      </div>
    </section>
    <!-- End Item Details -->
  </div>
</template>

<script>
export default {
  name: "SerieDetailPage",
  components: {},
  data() {
    return {
      url: window.location.pathname,
    };
  },
  methods: {
    addToWatchList(serialId) {
      console.log(serialId, 'DARI DETAIL PAGE');
      this.$store
        .dispatch("addToWatchList", serialId)
        .then(({ data }) => {
          this.$router.push("/watchlist").catch(() => {});
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: data.message,
            text: data.email,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
            showCloseButton: true,
            showConfirmButton: false,
          });
        });
    },
  },

  computed: {
    serie() {
      return this.$store.state.viewedSerie;
    },
  },
  created() {
    this.$store
      .dispatch("fetchSingleSerie", { id: this.$route.params.serieId })
      .then(({ data }) => {
        this.$store.commit("SET_VIEWED_SERIE", data);
      })
      .catch((err) => {
        this.$router.push("/");
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
          showCloseButton: true,
          showConfirmButton: false,
        });
      });
  },
};
</script>

<style  scoped>
th {
  width: 25%;
  text-align: left;
  vertical-align: top;
}
</style>
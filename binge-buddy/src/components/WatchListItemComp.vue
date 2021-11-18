<template>
 <!-- Start Single List -->
  <div>
    <div
      class="single-item-list"
      v-for="serie in watchlist"
      :key="serie.id"
    >
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-4 col-12">
          <p>{{ serie.serialTitle }}</p>
        </div>
        <div class="col-lg-3 col-md-3 col-12">
          <p>{{ serie.serialNextAir }}</p>
        </div>
        <div class="col-lg-3 col-md-3 col-12">
          <p>{{ serie.createdAt }}</p>
        </div>
        <div class="col-lg-2 col-md-2 col-12 align-right">
          <ul class="action-btn">
            <li>
              <a @click.prevent="seeSerie(serie.SerialId)"
                ><i class="lni lni-eye"></i
              ></a>
            </li>
            <li>
              <a @click.prevent="removeSerie(serie.id)"
                ><i class="lni lni-trash"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Single List -->
  </div>
</template>

<script>
export default {
name: "WatchListItemComp",
computed: {
    watchlist() {
      var options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
      };
      let formattedWatchlist = this.$store.state.watchList;
      formattedWatchlist.map((serie) => {
        serie.createdAt = new Date(serie.createdAt).toLocaleDateString("en-US",options);
        serie.serialNextAir = new Date(serie.serialNextAir).toLocaleDateString("en-US",options);
        if (serie.serialNextAir< new Date()) serie.serialNextAir= 'TBA'
      });
      return formattedWatchlist;
    },
  },
  methods: {
    seeSerie(serieId) {
      this.$router.push(`/series/${serieId}`).catch(()=>{})
    },
    removeSerie(payload) {
      this.$store.dispatch("removeSerie", payload)
        .then(({ data }) => {
          this.$store.dispatch("fetchWatchlist");
          this.$router.push("/watchlist").catch(()=>{})
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
  created() {
    this.$store.dispatch("fetchWatchlist");
  },
}
</script>

<style>

</style>
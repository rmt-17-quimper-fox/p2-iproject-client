<template>
  <div>
    <!-- Start Breadcrumbs -->
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">My Watch List</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>My Watch List</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- Start Dashboard Section -->
    <section class="dashboard section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <div class="main-content">
              <div class="dashboard-block mt-0">
                <h3 class="block-title">Watchlist</h3>
                <!-- Start Items Area -->
                <div class="my-items">
                  <!-- Start List Title -->
                  <div class="item-list-title">
                    <div class="row align-items-center">
                      <div class="col-lg-4 col-md-4 col-12">
                        <p>Title</p>
                      </div>
                      <div class="col-lg-3 col-md-3 col-12">
                        <p>Next Air Date</p>
                      </div>
                      <div class="col-lg-3 col-md-3 col-12">
                        <p>Date Added to Watchlist</p>
                      </div>
                      <div class="col-lg-2 col-md-2 col-12 align-right">
                        <p>Action</p>
                      </div>
                    </div>
                  </div>
                  <!-- End List Title -->
                  <watch-list-item-comp-vue/>
                </div>
                <!-- End Items Area -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Dashboard Section -->
  </div>
</template>

<script>
import WatchListItemCompVue from "../components/WatchListItemComp.vue";
export default {
  name: "WatchListPage",
  components: {
    WatchListItemCompVue,
  },
  created(){
    this.$store.dispatch('fetchWatchlist')
  }
};
</script>

<style>
</style>
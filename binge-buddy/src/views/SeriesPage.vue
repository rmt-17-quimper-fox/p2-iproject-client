<template>
  <div>
    <!-- Preloader -->
    <!-- <div  v-if="loadState" class="preloader">
      <div class="preloader-inner">
        <div class="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div> -->
    <!-- /End Preloader -->
    <!-- Start Breadcrumbs -->
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">TV Series</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>TV Series</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- Start Category -->
    <section class="category-page section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-12">
            <div class="category-sidebar">
              <!-- Start Single Widget -->
              <div class="single-widget search">
                <h3>Search TV Series By Title</h3>
                <form @submit.prevent="searchSeries" action="">
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search Here..."
                  />
                  <button type="submit">
                    <i class="lni lni-search-alt"></i>
                  </button>
                </form>
              </div>
              <!-- End Single Widget -->
              <!-- Start Single Widget -->
              <div class="single-widget">
                <h3>Browse TV Series By</h3>
                <ul class="list">
                  <li>
                    <a @click.prevent="sortBy('popular')" href=""
                      ><i class="lni lni-bullhorn"></i> Popularity</a
                    >
                  </li>
                  <li>
                    <a @click.prevent="sortBy('top_rated')" href=""
                      ><i class="lni lni-diamond-alt"></i> Top Rated
                    </a>
                  </li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <div class="category-grid-list">
              <div class="row">
                <div class="col-12">
                  <div class="category-grid-topbar">
                    <div class="row align-items-center">
                      <div class="col-lg-6 col-md-6 col-12">
                        <h3 class="title">
                          {{ seriesListDescription }} ({{ pageDesctiption }})
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <!-- Pagination -->

                      <div class="pagination left">
                        <ul class="pagination-list">
                          <li>
                            <a @click.prevent="previousPage" href=""><i class="lni lni-chevron-left"></i></a>
                          </li>
                          <li><a @click.prevent="changePage" href="">Go</a></li>
                          <li>
                            <input v-model="goToPage" style="width: 50px" />
                          </li>
                          <li>
                            <a @click.prevent="nextPage" href=""><i class="lni lni-chevron-right"></i></a>
                          </li>
                        </ul>
                      </div>
                      <!--/ End Pagination -->
                    </div>
                  </div>
                  <div class="tab-content" id="nav-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="nav-grid"
                      role="tabpanel"
                      aria-labelledby="nav-grid-tab"
                    >
                      <serie-card-comp-vue />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <!-- Pagination -->

                      <div class="pagination left">
                        <ul class="pagination-list">
                          <li>
                            <a @click.prevent="previousPage" href=""><i class="lni lni-chevron-left"></i></a>
                          </li>
                          <li><a @click.prevent="changePage" href="">Go</a></li>
                          <li>
                            <input v-model="goToPage" style="width: 50px" />
                          </li>
                          <li>
                            <a @click.prevent="nextPage" href=""><i class="lni lni-chevron-right"></i></a>
                          </li>
                        </ul>
                      </div>
                      <!--/ End Pagination -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Category -->
  </div>
</template>

<script>
import SerieCardCompVue from "../components/SerieCardComp.vue";

export default {
  components: { SerieCardCompVue },
  name: "SeriesPage",
  data() {
    return {
      searchQuery: "",
      goToPage: "",
    };
  },
  methods: {
    changePage() {
      let currentQuery = this.$store.state.searchQuery;
      const page = this.goToPage;
      let setPage = currentQuery !== "" ? `&page=${page}` : `?page=${page}`;
      let newQuery = currentQuery + setPage;
      this.$router.push(`/series${newQuery}`);
      this.$store.dispatch("fetchSeries");
    },
    nextPage() {
      let currentQuery = this.$store.state.searchQuery;
      const currentPage = this.currentPage;
      let setPage = currentQuery !== "" ? `&page=${currentPage+1}` : `?page=${currentPage+1}`;
      let newQuery = currentQuery + setPage;
      this.$router.push(`/series${newQuery}`);
      this.$store.dispatch("fetchSeries");
    },
    previousPage() {
      let currentQuery = this.$store.state.searchQuery;
      const currentPage = this.currentPage;
      let setPage = currentQuery !== "" ? `&page=${currentPage-1}` : `?page=${currentPage-1}`;
      let newQuery = currentQuery + setPage;
      this.$router.push(`/series${newQuery}`);
      this.$store.dispatch("fetchSeries");
    },
    sortBy(payload) {
      this.$store.commit("SET_SEARCH_QUERY", "");
      const sortBy = `/series?sortBy=${payload}`;
      this.searchQuery = "";
      this.$router.push(sortBy).catch(() => {});
      this.$store.dispatch("fetchSeries");
      this.$store.commit("SET_SEARCH_QUERY", `?sortBy=${payload}`);
    },
    searchSeries() {
      const payload = this.searchQuery.split(" ").join(",");
      const searchSeries = `/series?search=${payload}`;
      const currentSearchQuery = `?search=${payload}`;
      this.$store.commit("SET_SEARCH_QUERY", currentSearchQuery);
      this.$router.push(searchSeries).catch(() => {});
      this.$store.dispatch("fetchSeries");
    },
  },
  computed: {
    currentPage() {
      return this.$store.state.seriePagination.page;
    },
    loadState() {
      return this.$store.state.loading;
    },
    seriesListDescription() {
      let start = 20 * this.$store.state.seriePagination.page - 19;
      let end = 20 * this.$store.state.seriePagination.page;
      if (end > this.$store.state.seriePagination.totalPages) {
        end = this.$store.state.seriePagination.totalResults;
      }
      return `Showing ${start} - ${end} of Total ${this.$store.state.seriePagination.totalResults} Titles Found`;
    },
    pageDesctiption() {
      let totalPages = this.$store.state.seriePagination.totalPages;
      let currentPage = this.$store.state.seriePagination.page;
      return `Page ${currentPage} of ${totalPages}`;
    },
  },

  created() {
    this.$store.dispatch("fetchSeries");
  },
  updated() {
    this.$store.dispatch("fetchSeries");
  },
};
</script>

<style>
</style>
<template>
  <div class="home main-content">
    <Navbar />
    <!-- Page header with logo and tagline-->
    <header class="py-5 bg-light border-bottom mb-4 page-header">
      <div class="container">
        <div class="text-center my-5">
          <h1 class="fw-bolder">Welcome to <span style="font-style: italic;">NewSource</span>!</h1>
          <p class="lead mb-0">your only source for news!</p>
        </div>
      </div>
    </header>
    <!-- Search bar -->

    <!-- Page content-->
    <div class="container">
      <div class="row">
        <!-- News entries-->
        <div class="col-lg-8 news-container">
          <!-- Featured News post-->
          <featured-news></featured-news>
          <!-- Nested row for non-featured News posts-->
          <div class="row">
            <div class="d-flex flex-wrap">
              <news-card
                v-for="(news, index) in newsData"
                :key="index"
                :news="news"
              ></news-card>
            </div>
          </div>

          <!-- Pagination-->
          <b-pagination
            v-model="page"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            @change="handlePageChange"
          ></b-pagination>
        </div>
        <!-- Side widgets-->
        <div class="col-lg-4">
          <!-- Search widget-->
          <div class="card mb-4">
            <div class="card-header">Search</div>
            <div class="card-body">
              <div class="input-group">
                <input
                  v-model="search"
                  class="form-control"
                  type="text"
                  placeholder="Enter search term..."
                  aria-label="Enter search term..."
                  aria-describedby="button-search"
                />
                <button
                  @click.prevent="searchNews"
                  class="btn btn-primary"
                  id="button-search"
                  type="button"
                >
                  Go!
                </button>
              </div>
            </div>
          </div>
          <!-- Side widget-->
          <div class="card mb-4">
            <div class="card-header">Search By Voice</div>
            <div class="card-body">
              <button @click.prevent="startSpeech" class="btn btn-primary">speech to text</button>
              <p class="mt-2">{{ runtimeTranscription_ }}</p>
            </div>
          </div>
          <!-- pols -->
          <iframe src="https://pollsights.com/c/ZKzGQL" style="width:100%; height: 600px" frameborder=0></iframe>
        </div>
      </div>
    </div>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; Denis Irawan 2021
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FeaturedNews from "@/components/FeaturedNews.vue";
import NewsCard from "@/components/NewsCard.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    FeaturedNews,
    NewsCard,
  },
  data() {
    return {
      search: "",
      page: 1,
      perPage: 10,
      runtimeTranscription_: "",
      transcription_: [],
      lang_: "en-US"
    };
  },
  computed: {
    featuredNews() {
      return this.$store.state.featuredNews;
    },
    newsData() {
      return this.$store.state.newsData;
    },
    rows(){
      return this.$store.state.totalResults;
    }
  },
  methods: {
    fetchNewsList() {
        const payload = {
        apiKey: "59f5d55a2cfa4c95b4966189fd0698a7",
        country: 'us',
        pageSize: 11,
        page: 1
      };
      if(this.page){
        payload["page"] = this.page
      }
      this.$store
        .dispatch("fetchNewsList", payload)
        .then(({ data }) => {
          console.log(data.articles[0], "featured news");
          console.log(data.articles.slice(1), "sisanya");
          this.$store.commit("SET_FEATURED_NEWS", data.articles[0]);
          this.$store.commit("SET_NEWS_DATA", data.articles.slice(1));
          this.$store.commit('SET_TOTAL_RESULTS', data.totalResults)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchNews() {
      console.log(this.search);
      const payload = {
        qInTitle: "",
        apiKey: "59f5d55a2cfa4c95b4966189fd0698a7",
        pageSize: 11,
        page: 1
      };
      if(this.page){
        payload["page"] = this.page
      }
      if (this.search) {
        payload["qInTitle"] = this.search;
      }
      this.$store
        .dispatch("searchNews", payload)
        .then(({ data }) => {
          console.log(data.articles[0], "featured news");
          console.log(data.articles.slice(1), "sisanya");
          this.$store.commit("SET_FEATURED_NEWS", data.articles[0]);
          this.$store.commit("SET_NEWS_DATA", data.articles.slice(1));
          this.$store.commit('SET_TOTAL_RESULTS', data.totalResults)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handlePageChange(value){
      this.page = value;
      this.fetchNewsList()
    },
    startSpeech(){
      window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
      if(!window.SpeechRecognition){
        this.$swal('Sorry your browser does not support speech recognition')
      }
      const recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = true;

      // event voice recording
      recognition.addEventListener("result", event => {
        console.log(event.results)
        const text = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join("");
        this.runtimeTranscription_ = text;
      });

      // end of transcription
      recognition.addEventListener("end", () => {
        this.transcription_.push(this.runtimeTranscription_);
        this.search = this.runtimeTranscription_
        this.searchNews()
        this.runtimeTranscription_ = "";
        recognition.stop();

      });
      recognition.start();
    }
  },
  created() {
    this.fetchNewsList();
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_IS_LOGIN", true);
    }
  },
};
</script>
<style>
.main-content{
background-color: 	#F2F2F2;
background-attachment: fixed;
}
.page-header{
background-color: #082EFD;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%230D6EFD'/%3E%3Cstop offset='1' stop-color='%23082EFD'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%230b4efd'/%3E%3Cstop offset='1' stop-color='%23082EFD'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
color: white;
}
</style>
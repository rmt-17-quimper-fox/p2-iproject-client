<template>
  <div class="home">
    <Navbar />
    <!-- Page header with logo and tagline-->
    <header class="py-5 bg-light border-bottom mb-4 page-header">
      <div class="container">
        <div class="text-center my-5">
          <h1 class="fw-bolder">Welcome to NewSource!</h1>
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
</style>
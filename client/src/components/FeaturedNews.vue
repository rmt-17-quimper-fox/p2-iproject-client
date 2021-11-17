<template>
  <div class="card mb-4">
    <a :href="featuredNews.url"
      ><img class="card-img-top overflow-hidden" :src="featuredNews.urlToImage" alt="..."
    /></a>
    <div class="card-body">
      <div class="small text-muted">{{ featuredNews.publishedAt }}</div>
      <h2 class="card-title">{{ featuredNews.title }}</h2>
      <p class="card-text">
        {{ featuredNews.description }}
      </p>
      <a class="btn btn-primary" href="" @click.prevent="postBookmark" v-if="isLoggedIn === true" >Save to bookmark</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedNews",
  computed: {
    featuredNews() {
      return this.$store.state.featuredNews;
    },
    isLoggedIn(){
      return this.$store.state.isLogin
    }
  },
  methods: {
    postBookmark() {
      const payload = {
        title: this.featuredNews.title,
        imageUrl: this.featuredNews.urlToImage,
        description: this.featuredNews.description,
        link: this.featuredNews.url,
      };
      console.log(payload);
      this.$store
        .dispatch("postBookmark", payload)
        .then(() => {
          this.$swal("Bookmark successfully added");
        })
        .catch((err) => {
          this.$swal(err.response);
        });
    },
  },
};
</script>

<style>
</style>
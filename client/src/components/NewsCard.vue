<template>
  <!-- News post-->
  <div class="card mb-4 mx-1" style="width: 25rem">
    <a :href="news.url"
      ><img
        class="card-img-top"
        :src="news.urlToImage"
        alt="..."
    /></a>
    <div class="card-body">
      <div class="small text-muted">{{ news.publishedAt }}</div>
      <h2 class="card-title h4">{{ news.title }}</h2>
      <p class="card-text">
        {{ news.description }}
      </p>
      <a class="btn btn-primary" href="#!">Save to bookmark</a>
    </div>
  </div>
</template>

<script>
export default {
    name: "NewsCard",
    props: [ "news" ],
    method:{
      postBookmark(){
        const payload = {
          title: this.news.title,
          imageUrl: this.news.urlToImage,
          description: this.news.description,
          link: this.news.url,
        }
        console.log(payload, 'payload')
        // this.$store.dispatch('postBookmark', payload)

      }
    }
};
</script>

<style>
</style>
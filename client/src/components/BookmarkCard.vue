<template>
  <!-- News post-->
  <div class="card mb-4 mx-1" style="width: 25rem">
    <a :href="bookmark.url"
      ><img class="card-img-top" :src="bookmark.imageUrl" alt="..."
    /></a>
    <div class="card-body">
      <div class="small text-muted">{{ bookmark.publishedAt }}</div>
      <h2 class="card-title h4">{{ bookmark.title }}</h2>
      <p class="card-text">
        {{ bookmark.description }}
      </p>
      <button @click.prevent="readTheNews" class="btn btn-dark">read the news</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookmarkCard",
  props: ["bookmark"],
  methods: {
    readTheNews() {
      let title = this.bookmark.title
      let description = this.bookmark.description
      const utterance = new SpeechSynthesisUtterance();
      const voice = window.speechSynthesis.getVoices()[4];
      utterance.text = 'the title is:' + title + description;
      utterance.voice = voice;
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
      // window.speechSynthesis.onvoiceschanged = function () {
      // const utterance = new SpeechSynthesisUtterance();
      // const voice = window.speechSynthesis.getVoices()[4];
      // utterance.text = 'the title is:' + title + description;
      // utterance.voice = voice;
      // utterance.pitch = 1;
      // utterance.rate = 1;
      // utterance.volume = 1;
      // window.speechSynthesis.speak(utterance);
      // };

    },
  },
};
</script>

<style>
</style>
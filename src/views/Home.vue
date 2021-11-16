<template>
  <div class="home">
    <Tweet></Tweet>
  </div>
</template>

<script>
import Tweet from '../components/Tweet.vue'

export default {
  name: 'Home',
  components: {
    Tweet,
  }
}
</script>

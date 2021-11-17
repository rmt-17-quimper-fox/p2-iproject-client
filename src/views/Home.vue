<template>
<div>
    <Sidebar></Sidebar>
    <Tweet></Tweet>

</div>
</template>

<script>
import Tweet from '../components/Tweet.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Tweet,
    Sidebar
  }
}

import "../assets/css/home.css"
</script>

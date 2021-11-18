<template>
<div>
    <Navbar></Navbar>
    <!-- <Sidebar></Sidebar> -->
    <Tweet></Tweet>
</div>
</template>

<script>
import Tweet from '../components/Tweet.vue'
// import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Tweet,
    // Sidebar,
    Navbar,
  }
}

import "../assets/css/home.css"
</script>

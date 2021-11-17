<template>
  <div class="home">
    <MapsMain />
  </div>
</template>

<script>
// @ is an alias to /src
import MapsMain from '@/components/MapsMain.vue'

export default {
  name: 'Home',
  components: {
    MapsMain
  }
}
</script>

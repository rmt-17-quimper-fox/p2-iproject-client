<template>
  <div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div>
        <h1>Your Coordinates:</h1>
        <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng}} Longitude</p>
      </div>
      <div>
        <h1>Map Coordinates:</h1>
        <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng}} Longitude</p>
      </div>
    </div>
    <GmapMap
      :center="myCoordinates"
      :zoom="7"
      style="width: 640px; height:360px; margin:32px auto"
      ref="mapRef"
    ></GmapMap>
  </div>
</template>

<script>
export default {
  // name: "Map",
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      mapCoordinates: {
        lat: 0,
        lng: 0,
      }
    }
  },
  created () {
    // lokasi dari pnggu browser
    this.$getLocation({})
      .then(coordinates => {
        console.log(coordinates);
        this.myCoordinates = coordinates
        
    })
    .catch (err => alert(err))
  },
  mounted () {
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  },
  methods: {

  },
  computed: {
    mapCoordinatess () {
      if(!this.ap) {
        return {
          lat:0,
          lng:0
        }
      }
      
      return {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng()
      }
    }
  }
}
</script>

<style>

</style>
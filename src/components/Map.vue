<template>
  <div >
    <div class="container bg-white" style="display: flex; align-items: center; justify-content: space-between">
      <div class="ms-3">
        <h1>Your Coordinates:</h1>
        <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng}} Longitude</p>
      </div>

      <div class="card">
        <img
          :src="`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{weather.city_name}}</h5>
          <p class="card-text">
            {{weather.weather.description}}
          </p>
        </div>
      </div>

      
      <div class="me-3">
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
    this.$store.dispatch("getWeather")
    this.$getLocation({})
      .then(coordinates => {
        console.log(coordinates, "coordinates");
        this.myCoordinates = coordinates
        localStorage.setItem("lat", coordinates.lat)
        localStorage.setItem("lng", coordinates.lng)
        this.$store.commit("SET_LOCATION", coordinates)
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
    },
    weather () {
      console.log(this.$store.state, "ambil ini");
      return this.$store.state.weather
    }
  }
}
</script>

<style>
</style>
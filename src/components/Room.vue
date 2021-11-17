<template>
  <div>
    <h1>Room</h1>
    <l-map style="height: 300px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="(location, index) in insertLocation"
        :key="index"
        :lat-lng="location"
      ></l-marker>
    </l-map>
    <button @click="leave">Leave Room</button>
  </div>
</template>

<script>
// import L from 'leaflet';
// import axios from '../config/axios'
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  name: "Room",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  computed: {
    getUsers() {
      console.log(this.$store.state.usersInRoom, "dari state");
      return this.$store.state.usersInRoom;
      // return this.users.map(user => {
      //     return [user.User.latitude, user.User.longitude]
      // })
    },
    insertLocation(){
         return this.$store.state.usersInRoom.map((el) => {
          return [el.User.latitude, el.User.longitude];
        });
    },
    getRoomId() {
      return this.$store.state.joinRoomId;
    },
  },
  data: function () {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 5,
      center: [-6.904773135464642, 107.62000199436874],
      markerLatLng: [0, 0],
      users: [],
    };
  },
  methods: {
    getCurrentLocation() {
      if (!("geolocation" in navigator)) {
        // this.errorStr = 'Geolocation is not available.';
        // return;
      }

      navigator.geolocation.getCurrentPosition((pos) => {
        // console.log(pos);

        // this.gettingLocation = false;
        this.markerLatLng = [+pos.coords.latitude, +pos.coords.longitude];
        // console.log(this.getUsers, 'asuuuuuuuuuuuup');
        // this.getUsers.forEach((user) => {
        //   if (!user.User.latitude || !user.User.longitude) {
        //     user.User.latitude = +pos.coords.latitude;
        //     user.User.longitude = +pos.coords.longitude;
        //   }
        // });
        // this.users = this.getUsers.map((el) => {
        //   return [el.User.latitude, el.User.longitude];
        // });
        const coordinates = [+pos.coords.latitude, +pos.coords.longitude]
        this.$store.commit('GETLOCATION', coordinates)
        this.$store.dispatch('updateLocation')
            .then(response => {
                console.log(response, "updateLocation");
                this.$store.dispatch("getUsersRoom")
            })
            .catch(err => {
                console.log(err.response.data);
            })

      });
    },
    leave() {
      console.log(this.getRoomId);
      this.$store.commit("LEAVEROOM", this.getRoomId);
      this.$store
        .dispatch("leaveRoom")
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "ListRoom" });
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  created() {
    this.getCurrentLocation();
    // this.userLocation()
  },
};
</script>

<style></style>

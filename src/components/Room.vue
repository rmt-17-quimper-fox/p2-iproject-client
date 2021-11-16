<template>
    <div>
        <h1>Room</h1>
        <l-map style="height: 300px" :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker v-for="(location,index) in usersLocation" :key="index" :lat-lng="location"></l-marker>
        </l-map>
    </div>
</template>

<script>
// import L from 'leaflet';
import axios from '../config/axios'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
export default {
    name : 'Room',
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    computed : {
        usersLocation(){
            return this.users.map(user => {
                return [user.User.latitude, user.User.longitude]
            })
        }
    },
    data : function(){
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 5,
            center: [-6.904773135464642, 107.62000199436874],
            markerLatLng: [0, 0],
            users : []
        }
    },
    methods : {
        getCurrentLocation(){
            if(!("geolocation" in navigator)) {
            
            // this.errorStr = 'Geolocation is not available.';
            // return;
            }

            // this.gettingLocation = true;
            // get position
            navigator.geolocation.getCurrentPosition(pos => {
            console.log(pos);
            // this.gettingLocation = false;
            this.markerLatLng = [+pos.coords.latitude, +pos.coords.longitude];
            // }, err => {
            // this.gettingLocation = false;
            // this.errorStr = err.message;
            })
        },
        getUsers(){
            axios({
                method : 'GET',
                url : '/rooms/room/6',
                headers : {access_token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJhbGRpQG1haWwuY29tIiwiaWF0IjoxNjM3MDU5MjE5fQ.G18ZEeZIDy74ZMp--2HtuSRg7tdm055M_FsdrCg8d5c'}
            })
            .then(response => {
                console.log(response);
                this.users = response.data
            })
            .catch(err => {
                console.log(err.response);
            })
        }
    },
    created() {
        this.getCurrentLocation()
        this.getUsers()
    }
}
</script>

<style>

</style>
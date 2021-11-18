<template>


    <div class="container mt-4 mb-5">
        <div class="d-flex justify-content-center row">
            <div class="col-md-8">
                <div class="feed p-2">
                    <div class="d-flex flex-row justify-content-between align-items-center ">
                        
                        <PostTweet></PostTweet>
                        <div class="feed-icon px-2"><i class="fa fa-long-arrow-up text-black-50"></i></div>
                    </div>
                    <div class="bg-white border mt-2"
                        
                        v-for="tweet in tweets"
                        :key="tweet.id">
                        <div>
                            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45">
                                    <div class="d-flex flex-column flex-wrap ml-2">
                                        <span class="font-weight-bold">{{tweet.User.firstName}} {{tweet.User.lastName}}</span>
                                        <span class="text-black-50 time"></span>
                                    </div>
                                </div>
                                <div class="feed-icon px-2">
                                    <i class="fa fa-ellipsis-v text-black-50"></i></div>
                            </div>
                        </div>
                        <div class="p-2 px-3"><span>{{tweet.content}}</span></div>
                        <div class="d-flex justify-content-end socials p-2 py-3">
                            <router-link 
                                class="fas fa-map-marker-alt " style="font-size:25px;color:red"
                                tabindex="-1"
                                aria-disabled="true"
                                to="/map"
                            ></router-link> 
  
                            <i @click.prevent="upLikes(tweet.likes+1)" class="fa fa-thumbs-up ms-3" style="font-size:25px;color:red"> {{tweet.likes}} </i>
                            <i @click.prevent="upReply(tweet.reply+1)" class="fa fa-share" style="font-size:25px;color:red"></i>
                            <i class="fa fa-comments-o" style="font-size:25px;color:red"> {{tweet.reply}} </i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>


    
</template>

<script>

import PostTweet from "./PostTweet.vue"
export default {
    name: "Tweet",
    components: {
        PostTweet
    },
    methods: {
        seeDetail (id) {
            this.$router.push({ path: `/detail/${id}` })
            this.$store.dispatch("getQrCode", id)
        },
        upLikes (id) {
            this.$store.commit('UP_LIKES', id)
        },
    },
    computed: {
        tweets() {
            return this.$store.state.tweets;
        }
    },
    created() {
        this.$store.dispatch("fetchTweet");
    },
}



</script>

<style>

</style>
<template>
    <div class="wrapper">
        <div class="input-box">
        <div  class="tweet-area">
            <span class="placeholder"></span>
            <textarea name="" id="" cols="47" rows="10" 
                v-model="content" class="input editable" contenteditable="true" spellcheck="false"
                style="width: auto; border: none" 
            ></textarea>
            <!-- <div type="text" :v-model="content" class="input editable" contenteditable="true" spellcheck="false"></div> -->
            <div class="input readonly" contenteditable="true" spellcheck="false"></div>
        </div>
        <div class="privacy">
            <i class="fas fa-globe-asia"></i>
            <span>Everyone can reply</span>
        </div>
        </div>
        <div class="bottom">
        <ul class="icons">
            <li><i class="uil uil-capture"></i></li>
            <li><i class="far fa-file-image"></i></li>
            <li><i class="fas fa-map-marker-alt"></i></li>
            <li><i class="far fa-grin"></i></li>
            <li><i class="far fa-user"></i></li>
        </ul>
        <!-- <div class="content" type="button" >
            <span class="counter">100</span>
            
        </div> -->
        </div>
            <button type="button" @click.prevent="doPostTweet" class="btn btn-info">Tweet</button>
    </div>
</template>

<script>


export default {
    name: "PostTweet",
    data: function () {
        return {
            content: "",
            location: "",
        }
    },
    methods : {
        doPostTweet: function () {
            const payload = {
                content: this.content,
                location: this.location
            }
            console.log(`pressed`);
            console.log(payload.content, "12341");
            this.$store.dispatch('postTweet', payload)
            .then(({data}) => {
                console.log(data, "create Tweet");
                this.$router.push('/')
            })
            .catch ((err) => {
                console.log(err.response.data);
            })
        }
    },


}

import "../assets/css/tweet.css"
</script>

<style>

</style>
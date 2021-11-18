<template>
    <div class="bookmark">
        <Navbar/>
                <!-- Page content-->
        <div class="container mt-5">
            <div class="row">
                <!-- News entries-->
                <div class="col bookmark-container">
                    <!-- Nested row for non-featured News posts-->
                    <div class="row">
                        <div class="d-flex flex-wrap">
                            <!--place card here-->
                            <bookmark-card
                            v-for="(bookmark) in bookmarkData"
                            :key="bookmark.id"
                            :bookmark="bookmark"
                            ></bookmark-card>
                        </div>
                    </div>
                </div>
                <!-- Side widgets-->

            </div>
        </div>
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Denis Irawan 2021</p></div>
        </footer>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BookmarkCard from '@/components/BookmarkCard.vue'

export default {
    name: 'Bookmark',
    components: {
        Navbar,
        BookmarkCard
    },
    computed:{
        bookmarkData(){
            return this.$store.state.bookmarkData
        }
    },
    methods:{
        fetchBookmark(){
            this.$store.dispatch('fetchBookmark')
            .then(({data}) => {
                this.$store.commit('SET_BOOKMARK_DATA', data)
            })
            .catch((err) => {
                this.$swal(err.response.data.message)
            })  
        }
    },
    created(){
        this.fetchBookmark()
        if (localStorage.getItem("access_token")) {
        this.$store.commit("SET_IS_LOGIN", true);
        }
    }
}
</script>

<style>

</style>
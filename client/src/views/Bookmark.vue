<template>
    <div class="bookmark">
        <Navbar/>
                <!-- Page content-->
        <div class="container">
            <div class="row">
                <!-- News entries-->
                <div class="col-lg-8 bookmark-container">
                    <!-- Nested row for non-featured News posts-->
                    <div class="row">
                        <div class="d-flex flex-wrap">
                            <!--place card here-->
                        </div>
                    </div>
                    
                <!-- Side widgets-->
                <div class="col-lg-4">
                    <!-- Search widget-->
                    <div class="card mb-4">
                        <div class="card-header">Search</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    <!-- Side widget-->
                    <div class="card mb-4">
                        <div class="card-header">Chat</div>
                        <div class="card-body">Probably socket.io</div>
                    </div>
                </div>
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

export default {
    name: 'Bookmark',
    components: {
        Navbar
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
    }
}
</script>

<style>

</style>
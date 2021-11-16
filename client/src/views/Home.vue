<template>
  <div class="home">
    <Navbar/>
    <!-- Page header with logo and tagline-->
        <header class="py-5 bg-light border-bottom mb-4">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Welcome to NewSource!</h1>
                    <p class="lead mb-0">find news from multiple source and send it to you email for read later!</p>
                </div>
            </div>
        </header>
        <!-- Page content-->
        <div class="container">
            <div class="row">
                <!-- News entries-->
                <div class="col-lg-8 news-container">
                    <!-- Featured News post-->
                    <featured-news></featured-news>
                    <!-- Nested row for non-featured News posts-->
                    <div class="row">
                        <div class="d-flex flex-wrap">
                            <!-- News post-->
                            <div class="card mb-4 mx-1" style="width:25rem">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2021</div>
                                    <h2 class="card-title h4">News Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                            <!-- News post-->
                            <div class="card mb-4 mx-1" style="width:25rem">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2021</div>
                                    <h2 class="card-title h4">News Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Pagination-->
                    <nav aria-label="Pagination">
                        <hr class="my-0" />
                        <ul class="pagination justify-content-center my-4">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                            <li class="page-item"><a class="page-link" href="#!">15</a></li>
                            <li class="page-item"><a class="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
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
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import FeaturedNews from '@/components/FeaturedNews.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    FeaturedNews
  },
  computed:{
      featuredNews(){
          return this.$store.state.featuredNews
      }
  },
  methods:{
      fetchNewsList(){
        this.$store.dispatch("fetchNewsList")
        .then(({data}) => {
            console.log(data.articles[0], 'featured news')
            console.log(data.articles.slice(1), 'sisanya')
            this.$store.commit('SET_FEATURED_NEWS', data.articles[0])
            this.$store.commit('SET_NEWS_DATA', data.articles.slice(1))
        })
        .catch((error) => {
            console.log(error)
        })
      }
  },
  created(){
    this.fetchNewsList()
  }
}
</script>

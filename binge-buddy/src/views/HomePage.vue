<template>
  <div>
    <!-- Preloader -->
    <!-- <div class="preloader">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div> -->
    <!-- /End Preloader -->
    <!-- Start Hero Area -->
    <section class="hero-area style2 overlay">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12 col-12">
            <div class="hero-text wow fadeInLeft" data-wow-delay=".3s">
              <!-- Start Hero Text -->
              <div class="section-heading">
                <h2>Welcome to BingeBuddy!</h2>
                <p style="font-size: 200%">
                  Browse thousands of Movies and TV Shows and Add Them To Your
                  WatchList (Requires Login)
                </p>
              </div>
              <!-- End Hero Text -->
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-12">
            <!-- Start Search Form -->
            <div
              class="search-form style2 wow fadeInRight"
              data-wow-delay=".5s"
            >
              <h3 class="heading-title">Get Started</h3>
              <p class="sub-heding-text">
                <span v-if='this.$store.state.isLoggedIn == true'>You Are Logged In. </span> Can Go Ahead and Browse
                <span v-if='this.$store.state.isLoggedIn == false'>or Login</span> Below
              </p>
              <div v-if='this.$store.state.isLoggedIn == false' class="button header-button">
                <router-link to="/login">
                  <button class="btn">Log In</button></router-link
                >
              </div>
              <div class="button header-button">
                <router-link to="/series">
                  <button class="btn">Browse</button></router-link
                >
              </div>
              <div class="row"></div>
            </div>

            <!-- End Search Form -->
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero Area -->
  </div>
</template>

<script>
export default {
  name: "HomePage",

};
</script>

<style>
</style>
<template>
  <header class="header navbar-area">
    <div class="container">
      <div class="row align-items-start">
        <div class="col-lg-12">
          <div class="nav-inner">
            <nav class="navbar navbar-expand-lg">
              <router-link to="/" style="width: 200px">
                <img
                  src="https://i.pinimg.com/474x/34/3e/ab/343eab27279584b1ad721a49eb4b03f8.jpg"
                  alt="Logo"
                  style="max-width: 35%; height: auto"
                />
              </router-link>

              <div
                class="navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" class="navbar-nav">
                  <li class="nav-item">
                    <router-link to="/"
                      ><span class="active" aria-label="Toggle navigation"
                        >Home</span
                      ></router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/series"
                      ><span class="active" aria-label="Toggle navigation"
                        >TV Series</span
                      ></router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/watchlist"
                      ><span class="active" aria-label="Toggle navigation"
                        >My Watch List</span
                      ></router-link
                    >
                  </li>
                </ul>
              </div>
              <!-- navbar collapse -->
              <div class="login-button">
                <ul>
                  <li v-if="isLoggedin==false">
                    <router-link to="/login"
                      ><span class="active" aria-label="Toggle navigation"
                        ><i class="lni lni-enter"></i> Login</span
                      ></router-link
                    >
                  </li>
                  <li v-if="isLoggedin==false">
                    <router-link to="/register"
                      ><span class="active" aria-label="Toggle navigation"
                        ><i class="lni lni-user"></i> Register</span
                      ></router-link
                    >
                  </li>
                </ul>
              </div>
              <div
                class="button header-button"
                v-if="isLoggedin==true"
              >
                <button @click="logOut" class="btn">Log Out</button>
              </div>
            </nav>
            <!-- navbar -->
          </div>
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </header>
  <!-- End Header Area -->
</template>

<script>
export default {
  name: "NavBarComp",
  computed :{
    isLoggedin(){
      return this.$store.state.isLoggedIn
    }
  },
  methods:{
    logOut(){
      this.$store.commit("SET_LOGIN_STATUS",false)
      localStorage.clear();
      this.$router.push("/").catch(()=>{})
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have been logged out",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
};
</script>

<style>
</style>
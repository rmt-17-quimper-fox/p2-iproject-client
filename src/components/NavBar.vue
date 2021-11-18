<template>
  <nav class="navbar justify-content-between navbar-light bg-transparent sticky-top" >
    <div class="container-fluid">
    <a href="/" class="navbar-brand"> 
      <h1 class="text-dark ml-3 text-dark">ZERO</h1>
    </a>
    <div class="flex-grow-1 text-right">
    <ul class="nav justify-content-end">
        <li class="nav-item my-auto">
          <router-link to="/home" class="nav-link m-2 menu-item nav-active"><h3>Home</h3></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/order" class="nav-link m-2 menu-item nav-active"
          v-if="!this.$store.state.isLoggedIn"><h3>Submit Item</h3></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link m-2 menu-item nav-active"><h3>News</h3></router-link>
        </li>
        <li class="nav-item">
          <b-avatar src="https://ik.imagekit.io/fjaskqdnu0xp/default-profile-icon-24_NQe1Xwo3G.jpg?updatedAt=1637142012716" 
          size="4rem" class="mx-3"></b-avatar>
        </li>
        <li class="nav-item">
          <a href="#" @click="logout" class="nav-link m-2 menu-item nav-active"><h3>Log Out</h3></a>
        </li>
    </ul>
    </div>
    </div>
</nav>
</template>

<script>
import Swal from "sweetalert2"
export default {
    name: "NavBar",
    methods: {
        logout(){
          Swal.fire({
            title: 'Bye bye',
            text: "Are you sure you want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Logged Out!',
              )
              this.$store.dispatch('logout')
              this.$router.push('/')
             } 
          })
        }
    }
}
</script>

<style scoped>
h3 { font-family: "Acme"; color: black; font-size: 24px; font-style: normal; 
font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0;}

</style>
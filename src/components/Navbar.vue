<template>
  <ul>
    <li><a @click="toHomePage" style="font-size:2em;margin-top:4px;">Mitra Kita</a></li>
    <!-- <li  style="margin-left:60%"><a  href="#news">Contact</a></li> -->
    <li><a @click="toNews">News</a></li>
    <li><a @click="toLogOut">Logout</a></li>
  </ul>
</template>

<script>
export default {
  name:"Navbar",
  methods: {
    toLogOut: function(){
      localStorage.clear()
      this.$router.push('/login')
    },
    toHomePage: function(){
      this.$router.push('/')
    },
    toNews: function(){
      this.$router.push('/news')
    }
  }
};
</script>

<style>
body {margin:0;}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #dcf2fe;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
}

li {
  float: left;
}

li a {
  display: block;
  color: #056da5;
  margin-top: 15px;
  padding: 14px 25px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

</style>
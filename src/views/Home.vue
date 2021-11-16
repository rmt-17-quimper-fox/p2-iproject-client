<template>
  <div class="home wrapper">
    <h1>Ini home</h1>
    <section id = "home">
        <img class="imgHome" src="../assets/2.jpg" />
        <div class="kolom">
            <h2 class="deskripsi"> Connecting People Around The World</h2>
            <h2><span class="efek-ngetik"></span></h2>
            <p>Stay Safe And Meet Up Online!</p> <br><br><br><br>
            <h3>For More Information, Kindly Contact Us </h3>
            <p>+62 8193134 1609</p>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home'
}
</script>

<style>
.wrapper {
    width: 1100px;
    margin: auto;
    position: relative;
}
.imgHome {
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 5px;
  width: 70%;
}
section {
    margin: auto ;
    display: flex; 
    margin-bottom: 50px;
}
.kolom {
    margin-top: 100px;
    margin-bottom: 50px;
    margin-left: 50px;
}
h2 {
    font-family: 'comic sans ms';
    font-weight: 800;
    font-size: 45px;
    margin-bottom: 20px;
    color: #055052;
    width: 100%;
    line-height: 50px;
}

h3 {
    font-family: 'comic sans ms';
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
    color: #055052;
    width: 100%;
    line-height: 50px;
}

a.tbl-pink {
    background: #986D8E ;
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px 20px 15px 20px ;
    color: black;
    cursor: pointer;
    font-weight: bold;
}

a.tbl-pink:hover {
    background: #055052 ;
}

p {
    padding: 15px 10px 15px 10px;
}

/* .kolom .deskripsi {
    font-size: 20px;
    font-weight: bold;
    font-family: 'comic sans ms';
    color: #055052;
} */

</style>

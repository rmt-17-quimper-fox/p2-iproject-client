<template>
<div>
  <nav-bar></nav-bar>
      <section class="text-center mt-3">
      <div id="headline">
        <b-row>
            <b-col class="col-8">
                <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width="1024"
                    img-height="480"
                >
                    <b-carousel-slide
                    caption="Gudang ZERO dapat menampung hingga 10000 ton perhari"
                    img-src="https://ik.imagekit.io/fjaskqdnu0xp/Untitled_design__20__ifd_TwP-UGI.png?updatedAt=1637183906504"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Kami membantu lingkungan lebih sehat"
                    img-src="https://ik.imagekit.io/fjaskqdnu0xp/Untitled_design__13__Jj1VMMDuq.png?updatedAt=1637183905533"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Beberapa rongsok kami jadikan bahan produk recycle"
                    img-src="https://ik.imagekit.io/fjaskqdnu0xp/Untitled_design__19__yRtzLkjie.png?updatedAt=1637183904671"
                    ></b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col class="col-4 mt-5">
                <div class="text-center ">
                    <h1>Zero</h1>
                    <h3 class="mt-5">Sebuah platform untuk membantu anda mengumpukan, mencari, dan menjual barang-barang rongsok seperti kertas, beling, metal, dan lainnya.
                    <br>Tujuan dari kami yaitu mempermudah komunitas pengumpul rongsok untuk bertransaksi dan mendapat keuntungan. <br><br>Kami siap menampung semua rongsok
                    dari anda. Proses mudah dan gak ribet!</h3>
                </div>
            </b-col>
        </b-row>
    </div>
</section>
<section class="text-center mt-3">
      <div id="submititem">
        <b-row>
            <b-col class="col text-right">
                <img src="https://ik.imagekit.io/fjaskqdnu0xp/WELCOME_TO_ZERO__5__LFaBX5EEz.png?updatedAt=1637143173244">
            </b-col>
            <b-col class="col">
                <div class="text-left mt-5">
                    <img src="https://ik.imagekit.io/fjaskqdnu0xp/WELCOME_TO_ZERO__2__CFicTk0Tp.png?updatedAt=1637142663949" height=300 width=300 class="my-5">
                </div>
            </b-col>
        </b-row>
        <div class="text-center container">
        <router-link to="order"><button class="btn btn-light btn-lg mt-0 mb-5 p-5"><h1>Submit your item</h1></button></router-link>    
        </div>
    </div>
</section>

<section class="text-center">
      <div id="news" class="p-5">
          <h1 class="text-white">HEADLINE ECO-LIVING NEWS</h1>
            <b-row>
            <b-col class="col text-right">
                <img src="https://ik.imagekit.io/fjaskqdnu0xp/WELCOME_TO_ZERO__6__ryFf1fEbh.png?updatedAt=1637143678190" height=300 width=300>
            </b-col>
            <b-col class="col">
                <div class="text-left mt-5">
                    <router-link to="news"><button class="btn btn-light btn-lg mt-5 p-3"><h1>Go to News Page</h1></button></router-link>
                </div>
            </b-col>
        </b-row>
    </div>
</section>

<section class="text-center">
      <div>
        <b-row>
            <b-col class="col text-center p-5" id="headline">
                <h1>Search for items</h1>
                <button class="btn btn-lg btn-light">under maintenance</button>
            </b-col>
            <b-col class="col text-center p-5" id="submititem">
                <h1>Community</h1>
                <h3>Contact us: <br> Whatsapp: +62 829122 0021 <br> Email us: zero.support@gmail.com</h3>
            </b-col>
        </b-row>
    </div>
</section>

</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
    name: "Home",
    components: {
        NavBar
    }
}
</script>

<style scoped>
#headline {
    background-color: #EAD6B9
}
#submititem {
    background-color: #EDC38E
}
#news {
    background-color: #937D6D;
}

h1 { font-family: "Acme"; color: #937D6D; font-size: 50px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0}
h3 { font-family: "Acme"; color: #937D6D; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0;} 
</style>
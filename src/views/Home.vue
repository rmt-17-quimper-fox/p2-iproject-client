<template>
<div>
      <navbar></navbar>
        <img 
      style="display: block; margin-left: auto; margin-right: auto; margin-bottom: 200px; width: 70%;"
      src='https://image.freepik.com/free-vector/happy-children-jumping-summer-meadow_74855-5852.jpg'
      >
      <div class="wrapper">
        <section id="home">
            <img class="image" src="https://image.freepik.com/free-vector/poster-design-with-word-math-time-with-numbers-background_1308-42222.jpg">
            <div class="column">
                <p class="description">
                    Kamu Suka Angka?
                </p>
                <h2>
                    <a href="#" @click.prevent="math" style="text-decoration: none;">Yuk Main Game Matematika!</a>
                </h2>
                <p class="description-2">
                    Tambah-tambahan dan kurang-kurangan seru loh.
                    Udah gak sabar kan?
                    Langsung aja yuk kita main!
                </p>
                <p>
                    <a @click.prevent="math" style="text-decoration: none;" href="#" class="button-submit">
                        Mulai Bermain
                    </a>
                </p>
            </div>
        </section>
        <section>
            <div class="column">
                <p class="description">
                    Kamu Suka Buah-buahan?
                </p>
                <h2>
                    <a href="#" @click.prevent="fruits" style="text-decoration: none;" class="button">Yuk Mengenal Beragam Jenis Buah!</a>
                </h2>
                <p class="description-2">
                    Ada buah Apel, Pisang, Jeruk, dan lebih banyak lagi..
                </p>
                <p>
                    <a href="#"  style="text-decoration: none;" class="button-submit" @click.prevent="fruits">
                        Mengenal Buah-Buahan
                    </a>
                </p>
            </div>
            <img class="image-2" src="https://image.freepik.com/free-vector/hand-drawn-fruit-collection_23-2148953413.jpg">
        </section>
        <section>
            <img class="image" src="https://ik.imagekit.io/fdu5ptj23co/Desain_tanpa_judul_b_dkicXlw.gif?updatedAt=1637163052569">
            <div class="column">
                <p class="description">
                    Siapa Yang Hafal Nama-Nama Buah?
                </p>
                <h2>
                    <a @click.prevent="quiz" href="#" style="text-decoration: none;">Yuk Main Tebak-Tebakan!</a>
                </h2>
                <p class="description-2">
                    Nama buahnya pake bahasa Inggris ya, sekalian belajar..
                </p>
                <p>
                    <a @click.prevent="quiz" style="text-decoration: none;" href="#" class="button-submit">
                        Mulai Tebak-Tebakan
                    </a>
                </p>
            </div>
        </section>
                <section>
            <div class="column">
                <p class="description">
                    Siapa yang suka kucing?
                </p>
                <h2>
                    <a href="#" @click.prevent="cats" style="text-decoration: none;" class="button">Meow meow meow!</a>
                </h2>
                <p class="description-2">
                    Belajar terus capek, istirahat dulu sambil lihat-lihat kucing aja yuk..
                </p>
                <p>
                    <a href="#"  style="text-decoration: none;" class="button-submit" @click.prevent="cats">
                        Lihat Kucing
                    </a>
                </p>
            </div>
            <img class="image-2" src="https://image.freepik.com/free-vector/cute-cat-super-hero-cartoon-icon-illustration-animal-hero-icon-concept-isolated-flat-cartoon-style_138676-3127.jpg">
        </section>
    </div>
</div>

</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
    name: "Home",
    components: {
        Navbar,
    },
    methods: {
        async fruits() {
            this.$router.push({ name: "Fruits" });
        },
        async quiz() {
            this.$router.push({ name: "Quiz" });
        },
        async cats() {
            this.$router.push({ name: "Cats" });
        },
        async math() {
            this.$router.push({ name: "MathQuiz" });
        },
    }
};
</script>

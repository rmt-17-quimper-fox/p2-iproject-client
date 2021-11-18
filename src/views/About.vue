<template>
<div>
      <navbar></navbar>
      <div class="wrapper">
        <section id="home">
            <div class="column" style=" margin-left: 20%;  margin-right: 20%">
                <p class="description-2" style="font-size: 28px;">
                  Website ini dibuat sebagai sarana edukasi dan hiburan bagi anak usia dibawah 8 tahun.
                  Website ini mengandung konten yang ramah bagi anak.
                  Tidak dianjurkan bagi anak mengakses website ini tanpa izin dan pendampingan dari orang tua.
                </p>
                <p class="description-2" style="font-size: 28px; color: #FD6F96">
                  Saran dan masukan dapat anda sampaikan melalui email dengan alamat tujuan robybatas@gmail.com.
                </p>
                <p class="description-2" style="font-size: 28px;">
                  Terima kasih.
                </p>
            </div>
        </section>
    </div>
</div>

</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
    name: "About",
    components: {
        Navbar,
    },
};
</script>
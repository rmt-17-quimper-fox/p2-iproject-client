<template>
    <div>
        <navbar></navbar>
        <div class="card-r" style="font-family: 'Comic Neue', cursive; display: block; margin-left: auto; margin-right: auto; margin-bottom: 0px; margin-top: 100px;">
            <div class="flip-card-inner">
            <div style="margin-bottom: 3%; color: #6F69AC;">
                <i style="font-size: 24px;">{{ timerCount }}</i>
            </div>
            <div style="margin-bottom: 3%; color: #6F69AC;">
                <i style="font-size: 84px;">{{ math.soal }}</i>
            </div>
                <div style=" font-family: 'Comic Neue', cursive; color: #FD6F96; font-size: 18px; margin-top: 5%;">
                    <div style="margin-bottom: 3%">
                        <i style="font-size: 18px;">Pilih jawabanmu:</i>
                    </div>
                    <a style="margin-left: 13%;" href="#" class="btn-card2" @click.prevent="answer(math.opsi1)">{{ math.opsi1 }}</a>
                    <a href="#" class="btn-card2" @click.prevent="answer(math.opsi2)">{{ math.opsi2 }}</a>
                    <a href="#" class="btn-card2" @click.prevent="answer(math.opsi3)">{{ math.opsi3 }}</a>
                    <a href="#" class="btn-card2" @click.prevent="answer(math.opsi4)">{{ math.opsi4 }}</a>
                </div>
            </div>
            <div class="flip-card-inner1">
                <div style="margin-top: 5%">
                    <button class="btn-card" style="position: absolute; right: 0" @click.prevent="home">EXIT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from './Navbar.vue';

export default {
  components: { Navbar },
    name: 'MathQuiz',
        data() {
        return {
            fruitCounter: 1,
            timerCount: 30
        }
    },
    watch: {
        timerCount: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                } else {
                    this.$router.push({ name: "ScoreMath" });
                }
            },
            immediate: true
        }
    },
    computed: {
        ...mapState(["math"]),
    },
    methods: {
        ...mapActions(["getRandomMath", "trueAnswer", "wrongAnswer", "reset"]),
        async home() {
            this.$router.push({ name: "Home" });
        },
        async answer(payload) {
            if (this.math.jawaban === payload) {
                this.trueAnswer()
                this.fruitCounter++
            } else {
                this.wrongAnswer()
                this.fruitCounter++
            }
            await this.getRandomMath(this.fruitCounter)
        }
    },
    async created() {
        await this.getRandomMath(this.fruitCounter)
        await this.reset(0)
    }
}
</script>

<style>
.card-r {
    background-color: transparent;
    width: 500px;
    height: 300px;
    perspective: 1000px;
}

.flip-card-inner2 {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
}

.btn-card2 {
    font-size: 24px;
    font-family: 'Comic Neue', cursive;
    padding: 1% 2% 1% 2%;
    color: #6F69AC;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
    border: 0;
    font-weight: bold;
    text-decoration: none;
    margin-right: 10%;
}

.btn-card2:hover {
    font-family: 'Comic Neue', cursive;
    padding: 1% 2% 1% 2%;
    color: #FD6F96;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
    border: 0;
    font-weight: bold;
    transition: 0.3s;
}
</style>
<template>
    <div>
        <div class="card-q" style="font-family: 'Comic Neue', cursive; display: block; margin-left: auto; margin-right: auto; margin-bottom: 0px; margin-top: 100px;">
            <div style="margin-bottom: 3%; color: #6F69AC;">
                <i style="font-size: 24px;">Gambar buah apakah ini?</i>
            </div>
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img :src="quiz.imageUrl" style="width:500px;height:500px;">
                </div>
            </div>
            <div class="flip-card-inner2;" style="display: flex">
                <div style="font-family: 'Comic Neue', cursive; color: #FD6F96; font-size: 18px; margin-top: 5%; margin-right: 10%;">
                    <div style="margin-bottom: 3%">
                        <i style="font-size: 18px;">Pilih jawabanmu:</i>
                    </div>
                    <a href="#" class="btn-card2" @click.prevent="answer(quiz.answer.answer1)">{{ quiz.answer.answer1 }}</a>
                    <a href="#" class="btn-card2" @click.prevent="answer(quiz.answer.answer2)">{{ quiz.answer.answer2 }}</a>
                    <a href="#" class="btn-card2" @click.prevent="answer(quiz.answer.answer3)">{{ quiz.answer.answer3 }}</a>
                    <a href="#" class="btn-card2" @click.prevent="answer(quiz.answer.answer4)">{{ quiz.answer.answer4 }}</a>
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

export default {
    name: 'CardQuiz',
        data() {
        return {
            fruitCounter: 1,
            timerCount: 10
        }
    },
    computed: {
        ...mapState(["quiz"]),
    },
    methods: {
        ...mapActions(["getQuizId", "trueAnswer", "wrongAnswer", "reset"]),
        async home() {
            this.$router.push({ name: "Home" });
        },
        async answer(payload) {
            if (this.quiz.name === payload) {
                this.trueAnswer()
                this.fruitCounter++
            } else {
                this.wrongAnswer()
                this.fruitCounter++
            }
            if (this.fruitCounter === 6) {
                this.$router.push({ name: "ScoreFruit" });
            }
            await this.getQuizId(this.fruitCounter)
        }
    },
    async created() {
        await this.getQuizId(this.fruitCounter)
        await this.reset(0)
    }
}
</script>

<style>
.card-q {
    background-color: transparent;
    width: 500px;
    height: 500px;
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
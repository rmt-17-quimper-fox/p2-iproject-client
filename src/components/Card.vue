<template>
    <div>
        <div class="flip-card" style="display: block; margin-left: auto; margin-right: auto; margin-bottom: 0px; margin-top: 100px;">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img :src="fruit.imageUrl" style="width:500px;height:500px;">
                </div>
                <div class="flip-card-back">
                <h1>{{ fruit.name }}</h1> 
                <p>Informasi Nutrisi:</p>
                <p>{{ fruit.name }} mengandung {{ fruit.nutritions.calories }} gram kalori, {{ fruit.nutritions.carbohydrates }} gram karbohirat, {{ fruit.nutritions.fat }} gram lemak, {{ fruit.nutritions.protein }} gram protein, dan {{ fruit.nutritions.sugar }} gram gula alami.</p> 
                </div>
            </div>
        </div>
        <div class="flip-card1" style="display: block; margin-left: auto; margin-right: auto; margin-top: 0px;">
            <div class="flip-card-inner1">
                <div style="margin-top: 5%">
                <button style="position: absolute; left: 0" class="btn-card" @click.prevent="previous">PREVIOUS</button>
                <button style="position: absolute; left: 20%" class="btn-card" @click.prevent="next">NEXT</button>
                <button class="btn-card" style="position: absolute; right: 0" @click.prevent="home">EXIT</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: "Card",
    data() {
        return {
            fruitCounter: 1
        }
    },
    computed: {
        ...mapState(["fruit"]),
    },
    methods: {
        ...mapActions(["getFruitId"]),
        async home() {
            this.$router.push({ name: "Home" });
        },
        async next() {
            this.fruitCounter++
            if (this.fruitCounter === 6) {
                this.fruitCounter = 1
            }
            await this.getFruitId(this.fruitCounter)
        },
        async previous() {
            this.fruitCounter--
            if (this.fruitCounter === 0) {
                this.fruitCounter = 5
            }
            await this.getFruitId(this.fruitCounter)
        }
    },
    async created() {
        await this.getFruitId(this.fruitCounter)
    }
}
</script>

<style>
.flip-card {
    background-color: transparent;
    width: 500px;
    height: 500px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card1 {
    background-color: transparent;
    width: 500px;
}

.flip-card-inner1 {
    position: relative;
    width: 100%;
    text-align: center;
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    font-family: 'Comic Neue', cursive;
    padding: 20% 10% 20% 10%;
    background-color: #6F69AC;
    color: white;
    transform: rotateY(180deg);
}

.btn-card {
    font-family: 'Comic Neue', cursive;
    padding: 1% 2% 1% 2%;
    color: #6F69AC;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
    border: 0;
    font-weight: bold;
}

.btn-card:hover {
    font-family: 'Comic Neue', cursive;
    padding: 1% 2% 1% 2%;
    color: #FD6F96;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
    border: 0;
    font-weight: bold;
    transition: 0.3s;
}
</style>
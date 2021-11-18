<template>
  <div class="container">
    <div class="row" style="margin-top: 5%">
      <div class="col-3" style="margin-top: 17px">
        <div class="box" style="background-color: rgba(233, 233, 233, 0.973)">
          <h2 style="padding-top: 5%">Brands</h2>
          <ul v-for="brand in brands" :key="brand.id">
            <li style="padding-right: 15%; padding-top: 10%; list-style: none">
              <h5>
                <a href="" style="color: black; text-decoration: none">{{
                  brand.name
                }}</a>
              </h5>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <shoe-card
            v-for="shoe in shoes"
            :key="shoe.id"
            :shoe="shoe"
          ></shoe-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoeCard from './ShoeCard.vue';

export default {
  name: 'FilterHome',
  computed: {
    brands() {
      return this.$store.state.brands;
    },
    shoes() {
      return this.$store.state.shoes;
    },
  },
  components: {
    ShoeCard,
  },
  created() {
    this.$store.dispatch('fetchBrands');
    this.$store.dispatch('fetchShoes');
  },
};
</script>

<style></style>

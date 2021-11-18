<template>
  <div>
    <Navbar />
    <div class="container">
      <h1 style="margin-top: 1%">Cart List</h1>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Shoes Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <RowCartList v-for="cart in carts" :key="cart.id" :cart="cart" />
          <tr>
            <td></td>
            <td>Ongkir:</td>
            <td>Total Price:</td>
            <td>
              <button
                type="button"
                class="btn btn-outline-primary"
                @click.prevent="buyButton"
              >
                Buy Now!
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <label for="city"><b>Origin</b></label>
      <br />
      <select name="city" v-model="origin">
        <option
          v-for="city in cities"
          :key="city.city_id"
          :value="city.city_id"
          :selected="city.city_id == 'city.city_name'"
        >
          {{ city.city_name }}
        </option>
      </select>
      <br />
      <label for="city"><b>Destination</b></label>
      <br />
      <select name="city" v-model="destination">
        <option
          v-for="city in cities"
          :key="city.city_id"
          :value="city.city_id"
          :selected="city.city_id == 'city.city_name'"
        >
          {{ city.city_name }}
        </option>
      </select>
      <br />
      <label for="Weight"><b>Weight</b></label>
      <br />
      <input
        type="text"
        name="weight"
        v-model="weight"
        placeholder="Weigth in grams"
      />
      <br />
      <label for="Weight"><b>Weight</b></label>
      <br />
      <input
        type="text"
        name="courier"
        v-model="courier"
        placeholder="jne,pos,tiki"
      />
      <br />
      <br />
      <button
        type="button"
        class="btn btn-outline-info"
        style="margin-bottom: 20%"
        @click.prevent="cekOngkir"
      >
        Cek Ongkir
      </button>
    </div>
    <div class="footer">
      <HFooter></HFooter>
    </div>
  </div>
</template>

<script>
import RowCartList from '../components/RowCartList.vue';
import Navbar from '../components/Navbar.vue';
import HFooter from 'vue-hacktiv8-footer';
export default {
  name: 'MyCart',
  components: {
    RowCartList,
    Navbar,
    HFooter,
  },
  data() {
    return {
      origin: '',
      destination: '',
      weight: '',
      courier: '',
    };
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    cities() {
      return this.$store.state.city;
    },
  },
  created() {
    this.$store.dispatch('fetchCarts');
    this.$store.dispatch('fetchCity');
  },
  methods: {
    buyButton() {
      this.$router.push('/paypal');
    },
    cekOngkir() {},
  },
};
</script>

<style>
.footer {
  bottom: 0;
  position: fixed;
  width: 100%;
}
</style>

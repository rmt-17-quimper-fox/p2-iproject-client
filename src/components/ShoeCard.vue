<template>
  <div class="col">
    <div
      class="card"
      style="
        width: 18rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 2%;
      "
    >
      <img :src="shoe.imgUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <label for="Shoe"
          ><b>{{ shoe.name }}</b>
        </label>
        <br />
        <label for="price" style="padding-top: 5%">Rp.{{ shoe.price }}</label
        ><br />
        <label for="stock" style="padding-top: 5%">{{ shoe.stock }}</label>
        <div style="padding-top: 5%" v-if="loggedIn">
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="addCart(1)"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoeCard',
  props: ['shoe'],
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  methods: {
    async addCart(payload) {
      try {
        const ShoeId = this.shoe.id;
        const AuthorId = Number(localStorage.getItem('id'));

        const postCart = {
          ShoeId,
          AuthorId,
        };

        this.$store.dispatch('postCart', postCart);

        const stock = this.shoe.stock;
        const minusStock = stock - payload;

        const patchStock = {
          id: ShoeId,
          stock: minusStock,
        };

        this.$store.dispatch('patchStock', patchStock);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>

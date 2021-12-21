<template>
  <tr>
    <td style="width: 50%">
      <img
        class="image-src"
        :src="cart.Shoe.imgUrl"
        style="height: 30%; width: 30%"
      />
    </td>
    <td>{{ cart.Shoe.name }}</td>
    <td>Rp.{{ cart.Shoe.price }}</td>
    <td>
      <button class="btn btn-outline-danger" @click.prevent="cancelButton(1)">
        Cancel
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'RowCartList',
  props: ['cart'],
  methods: {
    async cancelButton(payload) {
      const id = this.cart.Shoe.id;

      this.$store.dispatch('cancelCart', id);
      this.$router.push('/');
      const stock = this.cart.Shoe.stock;
      const plusStock = stock + payload;

      const obj = {
        id,
        stock: plusStock,
      };
      this.$store.dispatch('patchStock', obj);
    },
  },
};
</script>

<style></style>

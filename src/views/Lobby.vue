<template>
  <div class="d-flex justify-content-evenly card-container">
    <PartyCard />
  </div>
</template>

<script>
import PartyCard from "../components/PartyCard.vue";
export default {
  name: "Lobby",
  components: {
    PartyCard,
  },
  computed: {
    parties() {
      return this.$store.state.parties;
    },
  },
};
</script>

<style scoped>
.card-container {
  margin-top: 100px;
  color: black;
}
</style>

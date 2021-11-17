<template>
  <div class="card" style="width: 18rem">
    <img
      v-if="!isChill"
      height="300px"
      src="../assets/competitive.jpg"
      class="card-img-top"
      alt=""
    />
    <img
      v-if="isChill"
      height="300px"
      src="../assets/relax.jpg"
      class="card-img-top"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title">{{ party.name }}</h5>
      <label for="">role: </label>
      <!-- <p v-for="">- support</p> -->
    </div>
    <ul class="list-group list-group-flush">
      <p>members:</p>
      <li
        v-for="member in party.members"
        :key="member.id"
        class="list-group-item"
      >
        {{ member.name }}
      </li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">request join</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartyCard",
  data() {
    return {
      isChill: false,
    };
  },
  props: ["party"],
  created() {
    if (this.party.mode === "chill") {
      this.isChill = true;
    } else {
      this.isChill = false;
    }
  },
};
</script>

<style></style>

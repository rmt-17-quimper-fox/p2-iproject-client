<template>
  <div class="admin">
    <p>Jumlah Pasient:</p>
    <img class="image" :src="charts" alt="chart" />
    <table border="1px">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Class</th>
        <th>Date</th>
        <th>Detail</th>
      </tr>
      <tr v-for="patient in patients" :key="patient.id">
        <td>{{ patient.name }}</td>
        <td>{{ patient.age }}</td>
        <td>{{ patient.gender }}</td>
        <td>{{ patient.Class.name }}</td>
        <td style="width: 200px">{{ patient.createdAt }}</td>
        <td style="text-align: center">
          <button @click="detailPatient(patient.id)" class="btn-tr">
            Detail
          </button>
          <button
            style="margin-left: 5px"
            @click="deletePatient(patient.id)"
            class="btn-rd"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Admin",
  computed: {
    charts() {
      return this.$store.state.charts;
    },
    patients() {
      return this.$store.state.patients;
    },
  },
  methods: {
    detailPatient: function (patientId) {
      this.$store.commit("GET_ID", patientId);
      this.$router.push({ path: `/patients-detail/${patientId}` });
    },

    deletePatient: async function (id) {
      let url = `http://localhost:3000/patients/${id}`;
      let headers = {
        access_token: localStorage.access_token,
      };
      const result = await axios.delete(url, { headers });
      console.log(result.data);
      this.$store.dispatch("fetchCharts");
      this.$store.dispatch("fetchPatients");
    },
  },
  created() {
    this.$store.dispatch("fetchCharts");
    this.$store.dispatch("fetchPatients");
  },
};
</script>

<style scoped>
.admin {
  margin-top: 150px;
  margin-left: 100px;
}
.image {
  height: 300px;
  width: 500px;
  margin-bottom: 130px;
}

table {
  float: right;
  border-collapse: collapse;
  width: 50%;
  margin-right: 100px;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #04aa6d;
  color: white;
}

.btn-tr {
  background-color: #17d868;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  height: 30px;
}
.btn-rd {
  background-color: red;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  height: 30px;
}
</style>
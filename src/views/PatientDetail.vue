<template>
<div>
<navbar/>
  <div class="details">
    <center>
      <h1>Name: {{ patientDetails[0].Patient.name }}</h1>
      <table border="1px">
        <tr>
          <th>Heart Rate</th>
          <th>SpO2</th>
          <th>Date</th>
        </tr>
        <tr v-for="patient in patientDetails" :key="patient.id">
          <td>{{ patient.heartrate }}</td>
          <td>{{ patient.SpO2 }}</td>
          <td style="width: 200px">{{ patient.createdAt }}</td>
        </tr>
      </table>
      <br />
      <button @click="submitData(patientDetails[0].PatientId)" class="btn-sd">
        Get update Data
      </button>
    </center>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from '../components/Navbar.vue';
export default {
  components: { Navbar },
  name: "patientDetail",
  computed: {
    patientDetails() {
      return this.$store.state.patientDetails;
    },
  },

  methods: {
    submitData: async function(id) {
      let url= `https://arcane-anchorage-95490.herokuapp.com/patients-details/${id}`
      let headers =  {
          access_token: localStorage.access_token,
        }
      const result = await axios.get(url,{ headers} )
      console.log(result.data);
      this.$store.dispatch("fetchPatientDetails");
    },
  },
  created() {
    this.$store.dispatch("fetchPatientDetails");
  },
};
</script>

<style scoped>
.details {
  margin-top: 150px;
}

table {
  width: 50%;
  /* margin-right: 100px; */
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

.btn-sd {
  height: 40px;
  width: 180px;
  cursor: pointer;
  background-color: rgb(56, 156, 243);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1em;
}
</style>
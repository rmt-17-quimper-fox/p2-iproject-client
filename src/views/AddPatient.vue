<template>
  <div class="background">
    <div class="body">
      <div class="container">
        <form @submit.prevent="toAddPatient" class="form-Login">
          <p id="title">Add Patient</p>
          <label>Name:</label><br />
          <input type="text" name="email" v-model="name" /><br /><br />
          <label>Gender:</label>
          <input type="text" name="Gender" v-model="gender" /><br /><br />
          <label>Age:</label>
          <input type="text" name="Age" v-model="age" /><br /><br />
          <label>Class:</label>
          <select name="cars" id="cars" form="carform" v-model="ClassId">
            <option disabled selected value="">--SELECT ONE--</option>
            <option value="2">II</option>
            <option value="3">I</option>
            <option value="1">VIP</option></select
          ><br /><br />
          <div style="text-align: left">
            <center>
              <button style="margin-bottom: 30px" class="btn-sd">Submit</button>
              <a @click="goToHome">
                <img
                  src="https://i.ibb.co/5nmYHbf/1024px-Facebook-Home-logo-svg.png"
                  alt="home"
                  style="width: 42px; height: 42px"
                />
              </a>
            </center>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Added",
  data: function () {
    return {
      name: "",
      age: "",
      gender: "",
      ClassId: "",
    };
  },
  methods: {
    toAddPatient: function () {
      axios({
        method: "post",
        url: "https://arcane-anchorage-95490.herokuapp.com/new-patients",
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          name: this.name,
          age: this.age,
          gender: this.gender,
          ClassId: this.ClassId,
        },
      })
        .then(({ data }) => {
          console.log(data);
          if (data) {
            this.$router.push({ path: "/" });
            this.$store.dispatch("fetchCharts");
            this.$store.dispatch("fetchPatients");
          }
        })
        .catch((err) => {
          this.$toastr.error(err.response.data.message);
          console.log(err);
        });
    },
    goToHome: function () {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped>
button {
  height: 40px;
  cursor: pointer;
}

a {
  cursor: pointer;
}
#cars {
  width: 101%;
  height: 42px;
}
.btn-sd {
  width: 100%;
  background-color: rgb(56, 156, 243);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1em;
}

.btn-gr {
  background-color: #17d868;
  border: none;
  border-radius: 5px;
  color: #fff;
}

#title {
  font-size: 2em;
}

.form-Login > input,
.form-Login > select {
  margin: 5px 0px;
  padding: 5px;
  width: 98%;
  height: 30px;
  border: solid 1px gray;
}

.body {
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  margin-left: 550px;
}

.container {
  width: 50%;
  height: fit-content;
  padding: 40px;
  margin-top: 30px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}

.background {
  height: 98vh;
  width: 99vw;
  background-image: url("https://i.ibb.co/L0fzzNY/Untitled-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
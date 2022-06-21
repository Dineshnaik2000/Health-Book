<template>
  <div>
    <NavBar />
    <h2 class="table-head">{{username}}'s Medical History</h2>

    <table>
      <tr>
        <th>Date</th>
        <th>Blood Pressure</th>
        <th>Body Temperature</th>
        <th>Pulse Rate</th>
        <th>Sugar level</th>
        <th>Weight</th>
        <th>Height</th>
      </tr>
      <tr v-for="read in table" :key="read">
        <td>{{ read.date }}</td>
        <td>{{ read.bloodtemp }}</td>
        <td>{{ read.bodytemp }}</td>
        <td>{{ read.pulserate }}</td>
        <td>{{ read.sugarlevel }}</td>
        <td>{{ read.weight }}</td>
        <td>{{ read.height }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// import { component } from 'vue/types/umd'

import NavBar from "./NavBar.vue";
import firebase from "firebase";

export default {
  name: "MedicalData",
  components: {
    NavBar,
  },
  data() {
    return {
      table: {},
      user: "",
      username:JSON.parse(localStorage.getItem("userName"))
    };
  },
  created() {
    this.getMediData();
  },
  methods: {
    getMediData() {
      firebase
        .database()
        .ref(
          "Patients/History/" +
            JSON.parse(localStorage.getItem("userName")) +
            "/"
        )
        .on("value", (snap) => {
          this.table = snap.val();
          console.log("data", snap.val());
        });
    },
  },
};
</script>

<style scoped>
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

table {
  padding: 300px;
  margin-top: 30px;
  border-collapse: collapse;
  border: 1.5px solid black;
  margin-left: auto;
  margin-right: auto;
}
th {
  padding: 10px;
}
td {
  padding: 5px;
}
.table-head {
  margin-top: 25px;
}
</style>
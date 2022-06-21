<template>
  <div>
    <NavBar />
    <h2 class="table-head">Users Information</h2>

    <table>
      <tr>
        <th>UserName</th>
        <th>PhoneNumber</th>
        <th>Gender</th>
        <th>Email</th>
      </tr>
      <tr v-for="read in table" :key="read">
        <td @click="mediData(read.username)">{{ read.username }}</td>
        <td>{{ read.phonenumber }}</td>
        <td>{{ read.sex }}</td>
        <td>{{ read.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import firebase from "firebase";

export default {
  name: "PatientDetails",
  components: {
    NavBar,
  },
  data() {
    return {
      table: {},
      userEmail: "",
      userName: "",
    };
  },
  created() {
    // this.readEmployees();
    this.getData();
  },
  methods: {
    mediData(username) {
      localStorage.setItem("userName", JSON.stringify(username));
      this.$router.push("/MedicalData");
    },

    readEmployees() {
      firebase
        .database()
        .ref("Patients/General/")
        .on("value", (snap) => {
          this.table = snap.val();
          console.log("patients data", snap.val());
        });
    },
    getData() {
      this.userEmail = JSON.parse(localStorage.getItem("doctorEmail"));
      if (this.userEmail != null) {
        this.readEmployees();
      } else {
        this.plsLogin();
      }
    },
    plsLogin() {
      alert(" To view Patient details Please log into your doctors's profile");
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
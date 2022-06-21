<template>
  <div>
    <NavBar />
    <div class="body">
      <div class="heading">
        <u>
          <h1>Andriod Based Community Health Monitoring system</h1>
          <h1>Our Services</h1>
        </u>
      </div>

      <div class="services">
        <div class="service" style="margin-right:40px;">
          <h2>Data monitoring</h2>

          <img
            src="https://www.clipartmax.com/png/middle/253-2533695_manage-all-health-monitoring-data-in-one-place-google-analytics-icons-free.png"
            alt=""
            width="250px"
            height="250px"
          />
        </div>
        <div v-on:click="getMediData()" class="service">
          <u class="click-me">
            <h2 class="click-me">Health Record</h2>
          </u>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikxXzZ69xNezBnnlDjN-92tJ5f9fSPBVuFw&usqp=CAU"
            alt=""
            width="250px"
            height="250px"
          />
        </div>
        <div @click="addMediData()" class="service">
          <u class="click-me">
            <h2>Add Health Data</h2>
          </u>
          <img
            src="http://www.ubalt.edu/merrick/uploads/660x450-mobile-homepage/660x450-Infographic%20Icons_Data%20Analytics.jpg"
            alt=""
            width="250px"
            height="250px"
            style="margin-left: 20px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import firebase from "firebase";

export default {
  name: "UserHome",
  components: {
    NavBar,
  },
  data() {
    return {
      patientEmail: "",
      // patientName:""
    };
  },
  methods: {
    addMediData() {
      this.$router.push("/AddMedicaldata");
    },
    getMediData() {
      this.patientEmail = JSON.parse(localStorage.getItem("userEmail"));
      if (this.patientEmail != null) {
        var ref = firebase.database().ref("Patients/General/");
        ref
          .orderByChild("email")
          .equalTo(this.patientEmail)
          .on("value", function (snapshot) {
            snapshot.forEach(function (child) {
              console.log("child", child.key);
              localStorage.setItem("patientName", JSON.stringify(child.key));
            });
          });
        this.$router.push("/IndividualMedidata");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.body {
  background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch15-217-01-kqdjajvh.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=15fccb3bc143a97781dc8845d6b00c9c");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;

  flex-direction: column;
  gap: 10%;
  background-color: #f0f2f5;
  height: 100vh;
}
.heading {
  margin-top: 50px;
}

.services {
  display: flex;
  flex-direction: row;
  padding: 20px;
  padding-left: 400px;
}
.service {
  margin-right: 20px;
}

.service img:hover{
  cursor: pointer;
  box-shadow: 2px 2px 10px 2px rgb(87, 95, 95);
}
u {
  transform: translateX(50%);
}
.click-me {
  color: #1637f1;
  -webkit-transition: color 1s;
  transition: color 1s;
}
.click-me:hover {
  color: #ff0000;
}
</style>
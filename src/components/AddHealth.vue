<template>
  <div>
    <form onsubmit="send(event)">
      <p>Enter Age:</p>
      <p>
        <input
          id="Age"
          v-model="age"
          type="text"
          name="Age"
          value="52"
          required
        />
      </p>
      <p>Enter Gender(M=1,F=0):</p>
      <p>
        <input
          id="Gender"
          v-model="gender"
          type="text"
          name="Gender"
          value="0"
          required
        />
      </p>
      <p>Enter Bodymass:</p>
      <p>
        <input
          id="Bodymass"
          type="text"
          v-model="bodymass"
          name="Bodymass"
          value="20"
          required
        />
      </p>
      <p>Enter Systolic BP:</p>
      <p>
        <input
          id="SBP"
          type="text"
          v-model="sbp"
          name="SBP"
          value="115"
          required
        />
      </p>
      <p>Enter Diastolic BP:</p>
      <p>
        <input
          id="DBP"
          type="text"
          name="DBP"
          v-model="dbp"
          value="82"
          required
        />
      </p>
      <p>Enter BodyTemp:</p>
      <p>
        <input
          id="BodyTemp"
          type="text"
          v-model="bodytemp"
          name="BodyTemp"
          value="37"
          required
        />
      </p>
      <p>Enter Glucose:</p>
      <p>
        <input
          id="Glucose"
          type="text"
          v-model="glucose"
          name="Glucose"
          value="90"
          required
        />
      </p>
      <p>Enter Heart Rate:</p>
      <p>
        <input
          id="HeartRate"
          v-model="heartrate"
          type="text"
          name="HeartRate"
          value="94"
          required
        />
      </p>
      <p>Enter RestECG level(0,1,2):</p>
      <p>
        <input
          id="restecg"
          type="text"
          v-model="restecg"
          name="restecg"
          value="0"
          required
        />
      </p>
      <p>Enter Pregnancies:</p>
      <p>
        <input
          id="Pregnancies"
          v-model="Pregnancies"
          type="text"
          name="Pregnancies"
          value="0"
          required
        />
      </p>
      <p>Enter ChestPain level(0,1,2,3):</p>
      <p>
        <input id="cp" v-model="cp" type="text" name="cp" value="0" required />
      </p>
      <p>Enter fbs:</p>
      <p>
        <input
          id="fbs"
          v-model="fbs"
          type="text"
          name="fbs"
          value="0"
          required
        />
      </p>

      <p><button>send</button></p>
    </form>
    <div id="result"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddHealth",
  data() {
    return {
      age: "",
      bodymass: "",
      sbp: "",
      dbp: "",
      bodytemp: "",
      glucose: "",
      gender: "",
      fbs: "",
      Pregnancies: "",
      heartrate: "",
      restecg: "",
      cp: "",
      flag: 1,
    };
  },
  methods: {
    send: function (e) {
      e.preventDefault();
      var data = {
        Age: this.age,
        Gender: this.gender,
        Bodymass: this.bodymass,
        SBP: this.sbp,
        BodyTemp: this.bodytemp,
        Glucose: this.glucose,
        HeartRate: this.heartrate,
        DBP: this.dbp,
        restecg: this.restecg,
        Pregnancies: this.Pregnancies,
        cp: this.cp,
        fbs: this.fbs,
      };

     axios.post({
        type: "POST",
        url: "/sendData",
        contentType: "application/json",
        success: function (res) {
          res = JSON.parse(res);
          var response = "";
          this.flag = 1;
          if (res.heartResult == "1") {
            this.flag = 0;
            response = "You have heart disease <br>";
          }
          if (res.diabetesResult == "1") {
            this.flag = 0;
            response += "You have diabetes disease <br>";
          }

          if (parseInt(this.bodytemp) < 35 || parseInt(this.bodytemp) > 37.8) {
            this.flag = 0;
            response += "Your body temperature is abnormal <br>";
          }
          if (parseInt(this.bodymass) < 18.5 || parseInt(this.bodymass) > 25) {
            this.flag = 0;
            response +=
              parseInt(this.bodymass) < 18.5
                ? "You are in the underweight range <br>"
                : "You are in the overweight range <br>";
          }
          //            console.log("38"<"220")
          if (parseInt(this.sbp) < 90 || parseInt(this.sbp) > 120) {
            this.flag = 0;
            response += "Your Blood pressure is abnormal <br>";
          }
          if (parseInt(this.glucose) > 100) {
            this.flag = 0;
            response += "Glucose level is abnormal <br>";
          }
          if (
            parseInt(this.heartrate.data) < 60 ||
            parseInt(this.heartrate.data) > 100
          ) {
            this.flag = 0;
            response += "Heart rate is in abnormal range <br>";
          }

          if (this.flag == 1) response = "Healthy person";

          this.result = response;
          // document.getElementById(this.result)= this.response;
        },
        data: JSON.stringify(data),
      });
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="body">
    <NavBar />

    <form class="signup-form" action="/register">
      <div class="form-header">
        <h1>Add Your Medical Data</h1>
      </div>

      <div class="form-body">
        <div class="form-group left">
          <label for="firstname" class="label-title">User Name *</label>
          <input
            type="text"
            id="username"
            class="form-input"
            placeholder="Enter your first name"
            required="required"
            v-model="user.username"
          />
        </div>
        <div class="form-group right">
          <label for="date" class="label-title"> Date *</label>
          <input
            type="date"
            id="date"
            class="form-input"
            placeholder="dd/mm/yyyy"
            required="required"
            v-model="user.Date"
          />
        </div>
        <div class="form-group left">
          <label for="sugarlevel" class="label-title">Sugar Level *</label>
          <input
            type="text"
            id="Sugarlevel"
            class="form-input"
            placeholder="In mg/dL"
            required="required"
            v-model="user.Sugarlevel"
          />
        </div>
        <div class="form-group left">
          <label for="Bloodtemp" class="label-title">Blood Temperature *</label>
          <input
            type="text"
            id="Bloodtemp"
            class="form-input"
            placeholder="In degree celsius"
            required="required"
            v-model="user.Bloodtemp"
          />
        </div>

        <div class="form-group left">
          <label for="Bodytemp" class="label-title">Body Temperature *</label>
          <input
            type="text"
            id="Bodytemp"
            class="form-input"
            placeholder="In degree celsius"
            required="required"
            v-model="user.Bodytemp"
          />
        </div>
        <div class="form-group left">
          <label for="Pulserate" class="label-title">Pulse Rate *</label>
          <input
            type="text"
            id="Pulserate"
            class="form-input"
            placeholder="In beats per minute"
            required="required"
            v-model="user.Pulserate"
          />
        </div>
        <div class="horizontal-group">
          <div class="form-group left">
            <label for="Height" class="label-title">Height *</label>
            <input
              type="text"
              id="Height"
              class="form-input"
              placeholder="In cm"
              required="required"
              v-model="user.Height"
            />
          </div>
          <div class="form-group left">
            <label for="Weight" class="label-title">Weight *</label>
            <input
              type="text"
              id="Weight"
              class="form-input"
              placeholder="In kilograms"
              required="required"
              v-model="user.Weight"
            />
          </div>
        </div>

        <div class="form-footer">
          <button
            type="submit"
            @click.prevent="addData(user)"
            method="post"
            class="btn"
          >
            Upload</button
          ><br />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import firebase from "firebase";

export default {
  name: "AddMedicalData",
  components: {
    NavBar,
  },
  data() {
    return {
      user: {
        username: "",
        Bloodtemp: "",
        Bodytemp: "",
        Pulserate: "",
        Height: "",
        Weight: "",
        Sugarlevel: "",
        Date: "",
      },
    };
  },
  methods: {
    addData: function () {
      this.presentData();
      firebase
        .database()
        .ref(
          "Patients/History/" + this.user.username + "/" + this.user.Date
        )
        .set({
          bloodtemp: this.user.Bloodtemp,
          bodytemp: this.user.Bodytemp,
          pulserate: this.user.Pulserate,
          sugarlevel: this.user.Sugarlevel,
          height: this.user.Height,
          weight: this.user.Weight,
          date: this.user.Date,
        });
      this.$router.push("/IndividualMediData");
    },
    presentData: function () {
      firebase
        .database()
        .ref("Patients/Medical-Data/" + this.user.username + "/")
        .set({
          bloodtemp: this.user.Bloodtemp,
          bodytemp: this.user.Bodytemp,
          pulserate: this.user.Pulserate,
          sugarlevel: this.user.Sugarlevel,
          height: this.user.Height,
          weight: this.user.Weight,
        });
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
  flex-wrap: wrap;
  gap: 10%;
  background-color: #f0f2f5;
  height: 100vh;
}
.signup-form {
  margin-top: -60px;
  font-family: sans-serif;
  width: 600px;
  margin: 30px auto;
  /* background: linear-gradient(to right, #ffffff 0%, #fafafa 50%, #ffffff 99%); */
  background-color: rgb(255, 255, 255, 0.8);

  border-radius: 10px;
}

.form-header {
  /* background-color: #eff0f1; */
  margin-top: -20px;
  background-color: rgb(75, 173, 219);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.form-header h1 {
  font-size: 30px;
  text-align: center;
  /* color: #666; */
  color: white;
  padding: 20px 0;
  border-bottom: 1px solid #cccccc;
}

.form-body {
  padding: 10px 40px;
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

.form-body .label-title {
  color: #1bb5ba;
  font-size: 17px;
  text-align: left;
}

.form-body .form-input {
  font-size: 17px;
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  color: #333333;
  text-align: left;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  background: white;
  outline: none;
}

.horizontal-group .left {
  float: left;
  width: 49%;
}

.horizontal-group .right {
  float: right;
  width: 49%;
}

input[type="file"] {
  outline: none;
  cursor: pointer;
  font-size: 17px;
}

::-webkit-input-placeholder {
  color: #d9d9d9;
}

.form-footer {
  clear: both;
}

.signup-form {
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  margin-top: -70px;
}

.signup-form .form-footer {
  background-color: #eff0f1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 40px;
  text-align: center;
  border-top: 1px solid #cccccc;
}

select {
  size: 400px;
  height: 34px;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  font-size: 17px;
  border: 1px solid #d6d6d6;
}

.interests {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#choose-file {
  border: none;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b72a;
  font-size: 17px;
  border: none;
  border-radius: 5px;
  color: #bcf5e7;
  cursor: pointer;
}

.btn:hover {
  background-color: #169c7b;
  color: white;
}
</style>


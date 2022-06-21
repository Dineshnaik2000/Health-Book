<template>
  <div class="body">
    <form class="signup-form" action="/register" method="post" id="app">
      <div class="form-header">
        <h1>Create User Account</h1>
      </div>

      <div class="form-body">
        <div class="horizontal-group">
          <div v-if="errors.length">
            <h5 v-for="error in errors" :key="error">{{ error }}</h5>
          </div>
          <div class="form-group left">
            <label for="firstname" class="label-title">First name *</label>
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
            <label for="lastname" class="label-title">Last name *</label>
            <input
              type="text"
              id="lastname"
              class="form-input"
              placeholder="Enter your last name"
              v-model="lastName"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="email" class="label-title">Email *</label>
          <input
            type="email"
            id="email"
            class="form-input"
            placeholder="Enter your email"
            required="required"
            v-model="user.email"
          />
        </div>
        <div class="form-group">
          <label for="phone" class="label-title">Phone Number *</label>
          <input
            type="phone"
            id="phone"
            class="form-input"
            placeholder="Enter your Phone number"
            required="required"
            v-model="user.phoneumber"
          />
        </div>
        <div class="horizontal-group">
          <div class="form-group left">
            <label class="label-title"> Gender : </label>

            <select name="gender" id="" v-model="user.gender">
              <option disabled value="">Please select one</option>
              <option for="male" name="gender" value="male" id="male">
                Male
              </option>
              <option for="female" name="gender" value="female" id="female">
                Female
              </option>
              <option
                for="Transgender"
                name="gender"
                value="Transgender"
                id="Transgender"
              >
                Transgender
              </option>
            </select>
          </div>

          <div class="form-group right">
            <label for="date" class="label-title"> Date of Birth *</label>
            <input
              type="date"
              id="date"
              class="form-input"
              placeholder="dd/mm/yyyy"
              required="required"
              v-model="DOB"
            />
          </div>
        </div>

        <div class="horizontal-group">
          <div class="form-group left">
            <label for="password" class="label-title">Password *</label>
            <input
              type="password"
              id="password"
              class="form-input"
              placeholder="Enter your password"
              required="required"
              v-model="user.password"
            />
          </div>

          <div class="form-group right">
            <label for="confirm-password" class="label-title"
              >Confirm Password *</label
            >
            <input
              type="password"
              class="form-input"
              id="confirm-password"
              placeholder="Enter your password again"
              required="required"
              v-model="password2"
            />
          </div>
        </div>

        <div class="horizontal-group">
          <div class="form-group">
            <label for="choose-file" class="label-title"
              >Upload Profile Picture :
            </label>
            <!-- <input type="file"  v-model="fileInput" id="choose-file" size="80"   /> -->
            <!-- @click="processFile(event)" -->

            <!-- <input type=user v-model="images" id="choose_file" class="form-input" placeholder="" size="80"  /> -->
            <input
              type="text"
              id="choose_file"
              class="form-input"
              placeholder=""
              v-model="images"
              size="80"
            />
          </div>
        </div>
      </div>

      <div class="form-footer">
        <button
          type="submit"
          @click.prevent="add(user)"
          method="post"
          class="btn"
        >
          <!-- @submit.prevent="postData" -->

          Sign Up</button
        ><br />

        <router-link :to="{ name: 'UserLogin' }">
          <p>
            <u><b>Already have an Account?</b></u>
          </p>
        </router-link>
        <!-- <label for=""> Already have an Account?</label> -->
      </div>
    </form>
  </div>
</template>


<script>
import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAv7d05Ua0sARq-NSOSosU2xlJNgSJ6ERk",
  authDomain: "fyp-project-8b428.firebaseapp.com",
  databaseURL: "https://fyp-project-8b428-default-rtdb.firebaseio.com",
  projectId: "fyp-project-8b428",
  storageBucket: "fyp-project-8b428.appspot.com",
  messagingSenderId: "619756825035",
  appId: "1:619756825035:web:1df486158053c1ddc2ae4e",
  measurementId: "G-6ZLBN8VPBH",
};

let app = firebase.initializeApp(firebaseConfig);
let db = app.database();
let userRef = db.ref("Patients/General");
// import UserDataService from "../services/UserDataService"

export default {
  name: "UserSignup",
  firebase: {
    user: userRef,
  },

  data() {
    return {
      Patients: [],
      firstName: "",
      lastName: "",
      emailId: "",
      DOB: "",
      phoneumber: "",
      gender: "",
      password1: "",
      password2: "",
      images: "",
      security: "",
      interest: [],
      errors: [],

      user: {
        username: "",
        email: "",
        password: "",
        phoneumber: "",
        gender: "",
      },
    };
  },
  methods: {
    // processFile(event) {
    //   this.someData = event.target.files[0];
    // },
    // handleFileUpload(event) {
    //   this.file = event.target.files;
    // },

    // postData() {

    //   firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(this.user.email, this.user.password)
    //   .then((res) => {
    //     res.user
    //       .updateProfile({
    //         displayName: this.user.username,
    //       })
    //       .then(() => {
    //         this.$router.push('/')
    //       });
    //       console.log("Auth")
    //   })
    //   .catch((error) => {
    //      alert(error.message);
    //   });

    // userRef.push(this.user );
      // this.user.username = "";
      // this.user.email = "";
      // this.user.phoneumber = "";
      // this.user.gender = "";
      // this.user.password = "";
    // },

    add: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.username,
            })
            .then(() => {
              this.$router.push("/");
            });
        })
        .catch((error) => {
          alert(error.message);
        });
        
      firebase
        .database()
        .ref("Patients/General/" + this.user.username )
        .set({
          username: this.user.username,
          email: this.user.email,
          phoneumber: this.user.phoneumber,
          gender: this.user.gender,
          password: this.user.password,
        });


      // toastr.success('Added')
    },

    // saveData(){
    //   var data = {
    //      firstName: this.firstName,
    //   emailId:this.emailId,
    //   phoneumber: this.phoneumber,

    //   };
    //    UserDataService.create(data)
    //     .then(() => {
    //       console.log("Created new item successfully!");
    //       this.submitted = true;
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
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
}
.signup-form {
  font-family: sans-serif;
  width: 600px;
  margin: 30px auto;
  /* background: linear-gradient(to right, #ffffff 0%, #fafafa 50%, #ffffff 99%); */
  background-color: rgb(255, 255, 255, 0.8);

  border-radius: 10px;
}

.form-header {
  /* background-color: #eff0f1; */
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

// :src="Script.js"


import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();
set(ref(db, 'users/' + userId), {
  username: name,
  email: email,
  profile_picture : imageUrl
})
.then(() => {
  // Data saved successfully!
})
.catch((error) => {
  // The write failed...
});


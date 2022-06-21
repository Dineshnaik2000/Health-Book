<template>
  <div class="body">
    <form class="signup-form" action="/register" method="post">
      <div class="form-header">
        <h1>Create Yout Doctor Profile</h1>
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
              id="firstname"
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
              v-model="user.lastName"
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
            v-model="user.phonenumber"
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

        <!-- <div class="horizontal-group">
          <div class="form-group">
            <label for="choose-file" class="label-title"
              >Upload Profile Picture :
            </label>
            <input
              type="text"
              id="choose_file"
              class="form-input"
              placeholder=""
              v-model="images"
              size="80"
            />
          </div>
        </div> -->

        <div class="horizontal-group">
          <div class="form-group">
            <label class="label-title">Specialist : </label>
            <input
              type="text"
              id="Specialist"
              class="form-input"
              placeholder=""
              v-model="user.specialist"
              size="80"
            />
          </div>
        </div>
      </div>

      <div class="form-footer">
        <button
          type="submit"
          @click.prevent="addDoctor(user)"
          method="post"
          class="btn"
        >
          Sign Up</button
        ><br />

        <router-link :to="{ name: 'DoctorLogin' }">
          <p>
            <u><b>Already have an Account?</b></u>
          </p>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "DoctorSignup",
  
  data() {
    return {
      errors: [],
      user: {
        username: "",
        email: "",
        password: "",
        phonenumber: "",
        gender: "",
        specialist: "",

      },
    };
  },
  methods: {
     addDoctor: function () {
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
        .ref("Doctor/General/" + this.user.username )
        .set({
          username: this.user.username,
          email: this.user.email,
          phonenumber: this.user.phonenumber,
          gender: this.user.gender,
          password: this.user.password,
          specialist:this.user.specialist

        })
     }



    ,
    processFile(event) {
      this.someData = event.target.files[0];
    },
    handleFileUpload(event) {
      this.file = event.target.files;
    },

    postData() {
      this.errors = [];
      if (!this.emailId) {
        this.errors.push("Please enter your email");
      } else if (!this.password1) {
        this.errors.push("Please enter your password");
      } else if (!this.password2) {
        this.errors.push("Please re-enter your password");
      } else if (!this.firstName) {
        this.errors.push("Please enter your first name");
      } else if (!this.phoneNumber) {
        this.errors.push("Please enter your phone number");
      } else if (!this.DOB) {
        this.errors.push("Please enter your date of birth");
      } else if (!this.gender) {
        this.errors.push("Please enter your gender");
      }
    }

    //  
  }

};
</script>

<style scoped>
.signup-form {
  font-family: sans-serif;
  width: 600px;
  margin: 30px auto;
  /* height: 700px; */
  /* background: linear-gradient(to right, #ffffff 0%, #fafafa 50%, #ffffff 99%); */
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 10px;
}

.form-header {
  /* background-color: #eff0f1; */
  background-color: rgb(48, 155, 197);
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
  font-size: 18px;
  border: none;
  border-radius: 5px;
  color: #bcf5e7;
  cursor: pointer;
}

.btn:hover {
  background-color: #169c7b;
  color: white;
}
.body {
  background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch15-217-01-kqdjajvh.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=15fccb3bc143a97781dc8845d6b00c9c");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

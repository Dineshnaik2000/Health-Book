<template>
  <body>
    <NavBar />
    <div class="user">
      <div class="content-title">
        <div class="content">
          <img
            src="@/assets/HealthBook without name.png"
            alt="logo"
            height="200px"
            width="200px"
          />
          <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0WPV6HYgx_164MKrvw7irMhbqkM9NDM9yg&usqp=CAU" alt="logo" height="200px" width="200px"> -->
          <h1 class="title">HealthBook</h1>
        </div>

        <h3 class="slogan">Your Happines is a Reflection of your Health</h3>
      </div>
      <div class="create">
        <div class="user-login">
          <div v-if="errors.length">
            <h5 v-for="error in errors" :key="error">{{ error }}</h5>
          </div>

          <form class="login">
            <input
              type="text"
              v-model="user.email"
              placeholder="Enter your E-mail"
            />
            <input
              type="password"
              v-model="user.password"
              placeholder="Enter Password"
            />
            <button
              class="submitbutton"
              @click.prevent="postData"
              type="submit"
              method="post"
            >
              <b>
                <h2>Log In</h2>
              </b>
            </button>
          </form>
          <div class="forget">
            <router-link :to="{ name: 'ForgetPassword' }">
              Forgotten Password?</router-link
            >
          </div>
          <div>
            <hr />
          </div>
          <button class="create-Account" @click="register">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  </body>

  <!-- <router-link to="/UserHome" > Forgotten Password?</router-link> -->
</template>

<script>
// import qs from "qs";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import NavBar from "./NavBar.vue";

// import swal from 'sweetalert';

Vue.use(VueAxios, axios);
import firebase from "firebase";

export default {
  name: "DoctorLogin",
  components: {
    NavBar,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },

  methods: {
    postData() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.errors = [];
          if (!this.user.email) {
            this.errors.push("Please enter your email");
          } else if (!this.user.password) {
            this.errors.push("Please enter your password");
          } else {
            localStorage.setItem(
              "doctorEmail",
              JSON.stringify(this.user.email)
            );
            this.$router.push("/UserHome");
          }
        })
        .catch((error) => {
          alert("User not exists");
          alert(error.message);
        });
    },
    register() {
      this.$router.push("/UserSignup");
    },
  },
};
</script>

<style scoped>
.user {
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

.create {
  margin-top: 5%;
}

.content-title {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 8%;
  margin-top: 10%;
  /* color: rgb(171, 230, 215); */
  /* font-family: 'Times New Roman', Times, serif; */
}

.user-login {
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 396px;
  padding: 20px;
  background-color: white;
  margin-top: 10%;
  border-radius: 10px;
  margin-bottom: 10px;
  gap: 10px;
}

.login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media only screen and (max-device-width: 350px) {
  .user {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    margin-top: -20px;
  }
  .content {
    width: 550px;
  }
  .content img {
    width: 150px;
    height: 150px;
  }
  .create {
    width: 550px;
    margin-left: 95px;
    margin-top: -80px;
  }
  .user-login {
    height: 350px;
    margin-bottom: 50px;
  }
  p {
    margin-left: -80px;
  }
}

@media only screen and (min-device-width: 350px) and (max-device-width: 850px) {
  .user {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    margin-top: -20px;
  }
  .content {
    width: 550px;
  }
  .content img {
    width: 150px;
    height: 150px;
  }
  .create {
    width: 550px;
    margin-left: 120px;
    margin-top: -80px;
  }
  .user-login {
    height: 350px;
    margin-bottom: 50px;
  }
  p {
    margin-left: -100px;
  }
}

input {
  background: #ffffff;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  height: 35px;
  padding: 10px;
}

.create-Account {
  width: 150px;
  height: 40px;
  margin-left: 30%;
  background: #42b72a;
  color: white;
}

button {
  height: 50px;
  cursor: pointer;
  background-color: #1877f2;
  border-radius: 7px;
  border: none;
}

.forget {
  color: #1877f2;
  cursor: pointer;
}

.submitbutton {
  color: white;
}

.title {
  font-size: 5em;
  /* color: #42b72a; */
  margin-bottom: 10px;
  /* text-shadow: 3px 1px black; */
}

.content {
  display: flex;
  align-items: center;
}
.slogan {
  margin-top: -10px;
  margin-left: 160px;
  text-shadow: 1px 1px black;
}

p {
  font-size: 20px;
  cursor: pointer;
}
body {
  background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch15-217-01-kqdjajvh.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=15fccb3bc143a97781dc8845d6b00c9c");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
  <div >
    <NavBar />
    <div class="container">
      <div class="heading">
        <u>
        <h1>Our Services</h1>
      </u>

      </div>
      

      <div class="services">
        <div class="service">
          <h2>Data monitoring</h2>
          <img
            src="https://www.clipartmax.com/png/middle/253-2533695_manage-all-health-monitoring-data-in-one-place-google-analytics-icons-free.png"
            alt=""
            width="250px"
            height="250px"
          />
        </div>
        <div v-on:click="show = !show" class="service">
          <h2>Health Record</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikxXzZ69xNezBnnlDjN-92tJ5f9fSPBVuFw&usqp=CAU"
            alt=""
            width="250px"
            height="250px"
          />
        </div>
        
        <div @click="addMediData()" class="service">
          <h2>Add Health Data</h2>
          <img
            src="http://www.ubalt.edu/merrick/uploads/660x450-mobile-homepage/660x450-Infographic%20Icons_Data%20Analytics.jpg"
            alt=""
            width="250px"
            height="250px"
            style="margin-left: 20px"
          />
        </div>
      </div>
      <div v-if="show" class="description">
        <h4>Health Data </h4>
           
      </div>



      
    </div>

    <div class="footer">
      <div class="footer-information">
        <img
          src="https://i.pinimg.com/originals/b7/02/af/b702afc7b811840ebc49037cdc98bc45.jpg"
        />
        <p>JSS Science and Technology University ,Mysuru</p>
        <img
          src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
        />
        <p>8747048124</p>
        <img
          src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"
        />
        <p>geethapatil2001@gmail.com</p>
      </div>

      <div class="footer-section">
        <div class="team1">
          <img
            src="https://www.pngitem.com/pimgs/m/283-2835572_team-icon-png-transparent-png.png"
          />
        </div>

        <div>
          <p class="team"><u>Project Guide :Prof.Thyagarajamurthy </u></p>

          <p class="team">Geetha Patil</p>
          <p class="team">Shivakumar R Mamadapur</p>
          <p class="team">Dinesh N Naik</p>
          <p class="team">Jagadish S</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "AboutUs",
  components: {
    NavBar,
  },
  data(){
    return{
      show:false,
    }

  }
 
};
</script>

<style scoped>
.container {
  background-image: url("https://img.freepik.com/free-photo/stethoscope-frame-with-copy-space_23-2148506682.jpg?w=2000");
  height: 100%;
  background-position: center;
   background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  gap: 10%;
  background-color: #f0f2f5;
  height: 100vh;
}
u{
    transform: translateX(50%);
}

.footer {
  display: flex;
  flex-direction: row;
  background: rgb(179, 176, 176, 0.7);
  margin-top: -370px;
  position: fixed;
  width: 100%;
}

.footer-section {
  display: flex;
}
.footer-information {
  font-family: "Times New Roman", Times, serif;
  margin-left: 30px;
  font-size: 21px;
  font-weight: bold;
  color: black;
  text-align: left;
  align-items: center;
}
.footer-information img {
  margin-top: 25px;
  width: 25px;
  height: 25px;
}
.footer-information p {
  margin-top: -30px;
  margin-left: 40px;
}
.footer-section img {
  width: 200px;
  height: 200px;
}

.team1 {
  letter-spacing: 6px;
  font-family: "Times New Roman", Times, serif;
  margin-left: 90px;
  font-size: 21px;
  font-weight: bold;
  margin-top: 20px;
}
.team {
  font-family: "Times New Roman", Times, serif;
  margin-left: 40px;
  font-size: 21px;
  font-weight: bold;
  color: black;
  padding-left: 20px;
  text-align: left;
}
/* .services {
  display: flex;
  flex-direction: row;
  padding: 20px;
  padding-left: 400px;
    margin-top: -520px;
    margin-left: 50px;
} */
.services {
  display: flex;
  flex-direction: row;
  padding: 20px;
  padding-left: 400px;
  margin-top: -100px;
}
.service {
  margin-right: 20px;
}
.services :active{
  background-color: rgb(52, 96, 81);
}


.description{

  margin-top: -100px;
  margin-left:100px;
}
</style>
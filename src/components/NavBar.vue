<template>
  <div class="header">
    <div class="header_left">
      <img
        src="@/assets/HealthBook without name.png"
        alt="logo"
        height="75px"
        width="75px"
      />
      <h3>HEALTH MONITORING SYSTEM AND ANALYSIS</h3>
    </div>
    <div class="header_right">
      <h4 class="header-option" @click.prevent="home">HOME</h4>
      <h4 class="header-option" @click.prevent="login">LOGIN</h4>
      <h4 class="header-option" @click.prevent="aboutus">ABOUT US</h4>
      <h4 class="header-option" @click.prevent="patientdata">ANALYSIS</h4>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/UserHome");
    },
    login() {
      this.$router.push("/");
    },
    aboutus() {
      this.$router.push("/AboutUs");
    },
    patientdata(){

      
      this.$router.push("/PatientDetails");
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(227, 236, 235, 0.967);
}

.header_left {
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: -100px;

}

.header_right {
  display: flex;
  width: 50%;
  font-weight: bold;
  justify-content: space-evenly;
  cursor: pointer;

}
.header-option {
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 40px;
    cursor: pointer;
}
.header-option:hover {
    background-color: #b0b2b6;
    border-radius: 5px;
    align-items: center;
    padding: 0 30px;
    border-bottom: none;
}




</style>
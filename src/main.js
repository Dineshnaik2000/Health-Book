import Vue from 'vue'
import App from './App.vue'
import vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'



import UserHome from './components/UserHome'
import UserLogin from './components/UserLogin.vue'
import UserSignup from './components/UserSignup.vue'
import DoctorLogin from './components/DoctorLogin.vue'
import DoctorSignup from './components/DoctorSignup.vue'
import NavBar from './components/NavBar.vue'
import AboutUs from './components/AboutUs.vue'
import PatientDetails from './components/PatientDetails.vue'
import MedicalData from './components/MedicalData.vue'
import AddMedicaldata from './components/AddMedicaldata.vue'
import IndividualMedidata from './components/IndividualMedidata'
import HideButton from './components/HideButton'
import AddHealth from './components/AddHealth'



Vue.config.productionTip = false



Vue.use(vuex)
Vue.use(VueAxios, axios)
Vue.use(VueRouter);









// firebase.initializeApp(firebaseConfig);

// export default firebase.database();





// const auth = getAuth(firebaseApp);
// // const db = getFirestore(firebaseApp);
// // const todosCol = collection(db, 'todos');
// // const snapshot = await getDocs(todosCol);

// onAuthStateChanged(auth, user => {
//   if (user != null) {
//     console.log("User logged in");
//   }
//   else {
//     console.log("user not exists")
//   }

// })



const store = [

]



const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/UserHome',
    name: 'UserHome',
    component: UserHome
  },
  {
    path: '/UserSignup',
    name: 'UserSignup',
    component: UserSignup
  },
  {
    path: '/DoctorLogin',
    name: 'DoctorLogin',
    component: DoctorLogin
  },
  {
    path: '/DoctorSignup',
    name: 'DoctorSignup',
    component: DoctorSignup
  },
  {
    path: '/NavBar',
    name: 'NavBar',
    component: NavBar
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/PatientDetails',
    name: 'PatientDetails',
    component: PatientDetails
  },
  {
    path: '/MedicalData',
    name: 'MedicalData',
    component: MedicalData
  },
  {
    path: '/AddMedicaldata',
    name: 'AddMedicaldata',
    component: AddMedicaldata
  },
  {
    path: '/IndividualMedidata',
    name: 'IndividualMedidata',
    component: IndividualMedidata
  },
  {
    path: '/HideButton',
    name: 'HideButton',
    component: HideButton
  },
  {
    path: '/AddHealth',
    name: 'AddHealth',
    component: AddHealth

  }
]





new Vue({
  store: new vuex.Store(store),

  router: new VueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,

  }),
  render: h => h(App),
}).$mount('#app')



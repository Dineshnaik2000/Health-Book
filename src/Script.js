import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAv7d05Ua0sARq-NSOSosU2xlJNgSJ6ERk",
  authDomain: "fyp-project-8b428.firebaseapp.com",
  databaseURL: "https://fyp-project-8b428-default-rtdb.firebaseio.com",
  projectId: "fyp-project-8b428",
  storageBucket: "fyp-project-8b428.appspot.com",
  messagingSenderId: "619756825035",
  appId: "1:619756825035:web:1df486158053c1ddc2ae4e",
  measurementId: "G-6ZLBN8VPBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// const analytics = getAnalytics(app);




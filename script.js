// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDJv_5XFWs_IHvoxS8fcqpcRk7oTXMs7k",
  authDomain: "ben10-landingpage.firebaseapp.com",
  projectId: "ben10-landingpage",
  storageBucket: "ben10-landingpage.firebasestorage.app",
  messagingSenderId: "1064841495483",
  appId: "1:1064841495483:web:2d9144fcf323bb55fffa9e",
  measurementId: "G-GKD4L6XFP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
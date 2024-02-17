// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmd_1AgQOTNe5yTSTBOGUkrmWYMI8WtQE",
  authDomain: "netflixgpt-bf0df.firebaseapp.com",
  projectId: "netflixgpt-bf0df",
  storageBucket: "netflixgpt-bf0df.appspot.com",
  messagingSenderId: "339590833684",
  appId: "1:339590833684:web:4239f03b8a9f965b12a901",
  measurementId: "G-GCLW5BWPYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
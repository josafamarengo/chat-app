// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkwNNAHqUl5eCBgRujYmatqsMk3BPCJHY",
  authDomain: "chat-app-mobile-2ba91.firebaseapp.com",
  projectId: "chat-app-mobile-2ba91",
  storageBucket: "chat-app-mobile-2ba91.appspot.com",
  messagingSenderId: "241116662283",
  appId: "1:241116662283:web:db275529f021da5890550e",
  measurementId: "G-9D7RY87G2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
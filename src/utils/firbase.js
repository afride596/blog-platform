// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhjEXizJAhOn1HGMvylymognaMY5qbx8A",
  authDomain: "blog-platform-91d39.firebaseapp.com",
  projectId: "blog-platform-91d39",
  storageBucket: "blog-platform-91d39.firebasestorage.app",
  messagingSenderId: "721186945596",
  appId: "1:721186945596:web:24446d66ed78eee06a6139",
  measurementId: "G-48DM5VW4ZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

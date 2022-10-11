// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz1C7uxc11_2WSEivcjj4_Eg8VMF4SXNU",
  authDomain: "evento-614b2.firebaseapp.com",
  projectId: "evento-614b2",
  storageBucket: "evento-614b2.appspot.com",
  messagingSenderId: "372465725358",
  appId: "1:372465725358:web:71fcd5e6d6aca8fc94223f",
  measurementId: "G-32M3EHGMEM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
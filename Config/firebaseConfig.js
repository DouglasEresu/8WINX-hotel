// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCyraYZvasdyIE2CIjp4_qMdatWl5VQvqs",
  authDomain: "winx-hotel.firebaseapp.com",
  projectId: "winx-hotel",
  storageBucket: "winx-hotel.appspot.com",
  messagingSenderId: "482652655710",
  appId: "1:482652655710:web:6e1996482c2349f64764cf",
  measurementId: "G-W3Q580BZTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app)
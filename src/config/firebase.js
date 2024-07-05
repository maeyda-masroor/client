// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHuI6cJTuqTEjYGy57by8DoGEIbhr_ig4",
  authDomain: "noorfoundation-c1c02.firebaseapp.com",
  projectId: "noorfoundation-c1c02",
  storageBucket: "noorfoundation-c1c02.appspot.com",
  messagingSenderId: "819150869543",
  appId: "1:819150869543:web:9484c20d5349acc1dbaa02",
  measurementId: "G-WQK5RKTERN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
const imgDb = getStorage(app);
export{imgDb,db}
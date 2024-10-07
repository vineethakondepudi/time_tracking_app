// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDK6aZXYqDuq-8X41ZDBTdEeJVHjd1fzA0",
    authDomain: "qqqqq-7bcb9.firebaseapp.com",
    databaseURL: "https://qqqqq-7bcb9-default-rtdb.firebaseio.com",
    projectId: "qqqqq-7bcb9",
    storageBucket: "qqqqq-7bcb9.appspot.com",
    messagingSenderId: "33069017510",
    appId: "1:33069017510:web:5640ef95e6ce5639460767",
    measurementId: "G-KMZFP256C1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app);
const txtDB = getFirestore(app);

export {imgDB,txtDB};
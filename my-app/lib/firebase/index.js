// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfil5SD5S2Go61yvi9QXp_WZA0iKFAaPw",
  authDomain: "finance-tracker-9ac3b.firebaseapp.com",
  projectId: "finance-tracker-9ac3b",
  storageBucket: "finance-tracker-9ac3b.appspot.com",
  messagingSenderId: "738663517894",
  appId: "1:738663517894:web:b912b3513b0b4f4b2651c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
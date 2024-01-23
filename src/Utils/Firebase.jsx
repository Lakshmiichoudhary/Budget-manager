// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjunGWwit77p0khndcLcg3gaG9TsnnGbk",
  authDomain: "budget-manager-63293.firebaseapp.com",
  projectId: "budget-manager-63293",
  storageBucket: "budget-manager-63293.appspot.com",
  messagingSenderId: "210444016370",
  appId: "1:210444016370:web:8b0d6f7c23566d2a564e6b",
  measurementId: "G-6Y7PWW3315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
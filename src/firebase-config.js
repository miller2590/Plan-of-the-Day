// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDheqFFMkgAGWtADvFuVIERNyETOGiIaEc",
  authDomain: "plan-of-the-day-dee88.firebaseapp.com",
  projectId: "plan-of-the-day-dee88",
  storageBucket: "plan-of-the-day-dee88.appspot.com",
  messagingSenderId: "534731365977",
  appId: "1:534731365977:web:4ce77b8ef9d88116319b48",
  measurementId: "G-RXC5BY6RL4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

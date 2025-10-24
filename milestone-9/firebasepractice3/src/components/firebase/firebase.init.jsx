// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMELLCAct6pkNI8Nfv-h1R_LHN18w6zA8",
  authDomain: "simple-firebase-auth-ffddd.firebaseapp.com",
  projectId: "simple-firebase-auth-ffddd",
  storageBucket: "simple-firebase-auth-ffddd.firebasestorage.app",
  messagingSenderId: "518581893305",
  appId: "1:518581893305:web:8bbc37054e309a3a248368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
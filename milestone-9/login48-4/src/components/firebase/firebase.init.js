// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfw-4ynh1_xxuv5gfzw52bCbMDKkB3awM",
  authDomain: "emailpasswordpath.firebaseapp.com",
  projectId: "emailpasswordpath",
  storageBucket: "emailpasswordpath.firebasestorage.app",
  messagingSenderId: "240620579805",
  appId: "1:240620579805:web:0b2baeb1b2507c29fca434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
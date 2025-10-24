// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_op9OTTab5Jk4sarskzHUtouvU96nRGM",
  authDomain: "email-password-auth-fc8c8.firebaseapp.com",
  projectId: "email-password-auth-fc8c8",
  storageBucket: "email-password-auth-fc8c8.firebasestorage.app",
  messagingSenderId: "593945603069",
  appId: "1:593945603069:web:9d8967c48411bb1c018794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDweThih-cFSUlcxi0Kx-NnHPxjSF-E6dY",
  authDomain: "fir-auth-c041a.firebaseapp.com",
  projectId: "fir-auth-c041a",
  storageBucket: "fir-auth-c041a.firebasestorage.app",
  messagingSenderId: "62423561593",
  appId: "1:62423561593:web:d04bc25716b078ac942ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
import {GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/firbase.init';
const googleProvider = new GoogleAuthProvider()
const Login = () => {
    const handlerSignIn=()=>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
    console.log(result.user)
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div>
        <h1>This is Login page</h1>
        <button onClick={handlerSignIn}>Sign In With Google</button>
    </div>
  );
};

export default Login
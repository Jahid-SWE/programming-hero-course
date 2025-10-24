import React from 'react'

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const handlerGoogleSignIn=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return (
    <div>
        <h1>This is Log In Page</h1>
        <button onClick={handlerGoogleSignIn} > Sign In With Google</button>
    </div>
  )
}

export default Login
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/firebase.init'

const provider= new GoogleAuthProvider()
const Login = () => {
    const handlerGoogleSignIn=()=>{
        // console.log('google')
        signInWithPopup(auth, provider)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
  return (
    <div>
        <h1>This is Login page </h1>
        <button onClick={handlerGoogleSignIn}>Sign In With Google</button>
    </div>
  )
}

export default Login
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from './firebase/firebase.init'

const googleProvider=new GoogleAuthProvider()
const gitHubProvider= new GithubAuthProvider
const Login = () => {
const [user, setUser]=useState(null)
  const handlerSignInGoogle=()=>{
      signInWithPopup(auth, googleProvider)
    .then(result=>{
        console.log(result.user)
        setUser(result.user)
    })
    .catch(error=>{
        console.log(error)
    })
  }
 const handlerGitHubSignIn=()=>{
    signInWithPopup(auth, gitHubProvider)
    .then(result=>{
        console.log(result.user)
        setUser(result.user)
    })
    .catch(error=>{
        console.log(error)
    })
  }

  const handlerSignOut=()=>{
    signOut(auth)
    .then(() => {
        console.log('signout Done')
        setUser(null)
        
    }).catch((error) => {
        console.log(error)
  
});
  }
  return (
    <div>
        <h1>This Is Login page</h1>
        {/* <button onClick={handlerSignInGoogle}>Sign In With Google</button>
        <button onClick={handlerSignOut}>Sign Out</button> */}
        {
            user 
            ?<button onClick={handlerSignOut}>Sign Out</button>
            :  <>
               <button onClick={handlerSignInGoogle}>Sign In With Google</button>
               <button onClick={handlerGitHubSignIn}>Sign In With GitHub</button>
               </>
        }

       {user && 
        <div >
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
            <img referrerPolicy='no-referrer' src={user.photoURL} alt="" />
           
        </div>
       }
    </div>
  )
}

export default Login
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router'
import { auth } from '../firebase/firebase.init'
import { toast } from 'react-toastify'

const Login = () => {
  const [error, setError]=useState('')
  const [success, setSuccess]=useState(false)
  const emailRef=useRef()

  const handlerLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value; 
    console.log('your email and password',email, password)

    setError('');
    setSuccess(false)

    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
      console.log(result.user)
      setSuccess(true)
      toast.success('Your LogIn Successfull')

      // After verification
      if(!result.user.emailVerified){
        alert('please verify first')
      }
      // email varivied or not
      // if(!result.user.emailVerified){
      //   alert('Please varify your Email Address')
      // }
    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message)
    })
  }

const handlerForgotPasswor=()=>{
  const email= emailRef.current.value;
  console.log('email forgot passowrd',email)
  // console.log('Forgot Password', emailRef)
  sendPasswordResetEmail(auth,email)
  .then(()=>{
    alert('please Check Your Email')
  })
  .catch((error)=>{
    console.log('error valid email',error.message)
  })
}

  return (

    <div className="card m-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-xl font-bold">Login now!</h1>
        <form onSubmit={handlerLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input 
            type="email" 
            name='email' 
            className="input" 
            ref={emailRef}
            placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a onClick={handlerForgotPasswor} className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        {
          success && <p className='text-green-300'>You have LogIn Successfull </p>
        }
        {
          error && <p className='text-red-500'>{error}</p>
        }
        <p>New to Our Website? Please <Link to='/register' className='text-blue-400 underline'>Register</Link></p>
      </div>
    </div>

  )
}

export default Login
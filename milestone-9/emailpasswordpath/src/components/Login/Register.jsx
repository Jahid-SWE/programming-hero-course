import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.init'

const Register = () => {
    const [userEmail, setUserEmail]=useState('')
    const [success, setSuccess]= useState(false)
    const [error, setError]= useState()
    const handlerRegister = (event) => {
        event.preventDefault()
        const email= event.target.email.value
        const password= event.target.password. value
        console.log('register clicked', email, password)
        setUserEmail('')
        setError('');
        setSuccess(false)

        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log('afcter create of new user',result.user)
            setUserEmail(email)
            setSuccess(true)
            event.target.reset()
        })
        .catch(error=>{
            console.log('Error Happend here',error.message)
            setError(error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handlerRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4" >Register</button>
                            </fieldset>
                            {
                                success && userEmail && <p className='text-emerald-500 text-center '>Your gmail login successfull {userEmail} </p>
                            }
                            {
                                error && <p className='bg-red-600 mt-10'>{error}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
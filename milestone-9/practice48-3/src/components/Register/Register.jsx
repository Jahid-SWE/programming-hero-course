import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.init'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from 'react-icons/fa'


const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const handlerRegister = (event) => {
        event.preventDefault()
        // console.log('event email valu', event.target.email.value)
        const email = event.target.email.value
        const password = event.target.password.value
        console.log('Email valu and password', email, password)


        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

        if (!passwordPattern.test(password)) {
            setError('Invalid password. Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, &).')
            return
        }



        setError('');
        setSuccess(false)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                setSuccess(true)
                event.target.reset()
                // toast('Email Register Successfully')
                // toast.success(' Task Done', {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: false,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "colored",
                // });

            })
            .catch(error => {
                console.log(error)
                setError(error.message)
                // 
                // toast("Registration Fail")


            })
    }

    const handleShowPassworToggle = (event) => {
        event.preventDefault()
        setShowPassword(!showPassword)
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
                                <div className='relative'>
                                    <label className="label">Password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        className="input" placeholder="Password" />
                                    <button onClick={handleShowPassworToggle}
                                        className="btn btn-xs absolute top-6 right-6">
                                        {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                    </button>
                                </div>

                                <div>
                                    <label className='label'>
                                        <input type="checkbox"  class="checkbox" />
                                        <h1>Accept Our Terms & Condition</h1>
                                    </label>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            {
                                success && <p className='text-2xl text-green-500'>Accout Create Successfully</p>
                            }
                            {
                                error && <p className='text-red-600'>{error}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase.init'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router'
import { toast } from 'react-toastify'



const Register = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    console.log(auth.currentUser)
    const handlerRegister = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name=event.target.name.value;
        const photo=event.target.photo.value;
        const terms=event.target.terms.checked
        console.log('clicked buttun', email, password, terms, name, photo)


        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;


        if (!passwordPattern.test(password)) {
            setError('Password must be 8–16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).')
            return;
        }
        // reset status success or error
        setError('')
        setSuccess(false)

        if(!terms){
            setError('Please accept our terms and condetion')
            return
        }

        // console.log('Here All email and Password are ' ,email, password)
        createUserWithEmailAndPassword(auth, email, password, terms)
            .then((result) => {
                setSuccess(true)
                event.target.reset()

                // update user Profile
                const profile={
                    displayName:name,
                    photoURL:photo
                }
                updateProfile(result.user,profile)
                .then(()=>{
                    
                })


                // send verification email 
                sendEmailVerification(result.user)
                .then(()=>{
                    toast.success('Your profile ceated and varify now')
                })


                // sendEmailVerification(result.user)
                //     .then(()=>{
                //         alert('Please Verify Your Email address')
                //     })

                // console.log(result.user)
            })
            .catch((error) => {
                console.log('Error happent', error.message)
                setError(error.message)
            })

    }

    const handlerShowPassword = () => {
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
                        <form onSubmit={handlerRegister} >
                            <fieldset className="fieldset">
                                {/* User Name */}
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Your Name" />
                                {/* user Photo */}
                                <label className="label">Photo Url</label>
                                <input type="text" name='photo' className="input" placeholder="Photo Url" />
                                {/* user email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                {/* user Password */}
                                <div className=' relative'>
                                    <label className="label">Password</label>
                                    <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                                    <button onClick={handlerShowPassword} className="btn btn-xs absolute top-6 right-5">{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                                </div>
                                <div>
                                    <label class="label">
                                        <input 
                                        type="checkbox" 
                                        name='terms'
                                        class="checkbox" />
                                        Accept Our Terms And Condition
                                    </label>

                                </div>
                                <button
                                    className="btn btn-neutral mt-4">Register</button>

                            </fieldset>
                            {
                                success && <h2 className='text-green-400'>Account Create Successfully</h2>
                            }
                            {
                                error && <h2 className='text-fuchsia-500'>{error}</h2>
                            }
                        </form>
                        <p>Already Have an Account? Please <Link to='/login' className='text-blue-400 underline'>LogIn</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
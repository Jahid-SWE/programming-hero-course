import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase.init'
const googleProvider = new GoogleAuthProvider()
const Home = () => {
    const [user, setUser] = useState(null)
    const handlerGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('sign out done')
            setUser(null)
        }).catch((error) => {
            console.log('Error Occour Here', error)
        });
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-base-200 p-4'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        {/* <button className="btn bg-cyan-500 text-black" onClick={handlerGoogle}>Sign In With Google</button>
                        <button className="btn bg-cyan-500 text-black" onClick={handleSignOut}>Sign Out</button> */}
                        {
                            user ?
                            <button className="btn bg-cyan-500 text-black" onClick={handleSignOut}>Sign Out</button>
                            : <button className="btn bg-cyan-500 text-black" onClick={handlerGoogle}>Sign In With Google</button>
                        }
                    </div>
                    {
                        user && <div>
                            <h2 className="card-title">{user.displayName}</h2>
                            <h2 className="card-title">{user.email}</h2>
                            <img src={user.photoURL}  alt="" />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Home
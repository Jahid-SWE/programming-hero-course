import React from 'react'
import './App.css'

function Friend({frined}){
    // console.log(frined)
   
    const {name,email,phone}=frined;
    return(
        <div className='card'>
            <h5>Name : {name}</h5>
            <h5>Email : {email}</h5>
            <h5>Phone : {phone}</h5>
        </div>
    )
}
export default Friend
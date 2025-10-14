import React from 'react'
import { Link } from 'react-router'

const User2 = ({user}) => {
    const {name, email, phone}=user
    const sStyle={
        border:'1px solid pink', 
        margin:'10px',
        padding:'20px', 
        borderRadius:'20px'
    }
  return (
    <div style={sStyle}>
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        
    </div>
  )
}

export default User2
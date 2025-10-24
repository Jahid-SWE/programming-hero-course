import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

const UserDetails = () => {
    const user= useLoaderData()
    const navigate=useNavigate()
    const {id,website, name}=user
  return (
    <div style={{width:'500px', border:'1px solid pink'}}>
        <h4>User Details {id}</h4>
        <p>name :{name}</p>
        <p>Website: {website}</p>
        <button onClick={()=>navigate(-1)}>Previous</button>
    </div>
  )
}

export default UserDetails
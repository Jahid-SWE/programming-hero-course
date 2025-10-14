import React from 'react'
import { useLoaderData } from 'react-router'

const UserDetails = () => {
    const user= useLoaderData()
    const {website, name}=user
  return (
    <div>
        <h4>User Details</h4>
        <p>name :{name}</p>
        <p>Website: {website}</p>
    </div>
  )
}

export default UserDetails
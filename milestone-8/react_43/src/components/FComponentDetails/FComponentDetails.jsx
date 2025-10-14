import React from 'react'
import { useLoaderData } from 'react-router'

const FComponentDetails = () => {
    const comment = useLoaderData()
    const {name, body}=comment

  return (
    <div style={{border:'2px solid red', borderRadius:'20px', margin:'20px'}}>
        
        <p>Name : {name}</p>
        <p>comment : {body}</p>
    </div>
  )
}

export default FComponentDetails
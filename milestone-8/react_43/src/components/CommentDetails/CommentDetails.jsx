import React from 'react'
import { useLoaderData } from 'react-router'

const CommentDetails = () => {
    const comment=useLoaderData();
    const {name, body}=comment
  return (
    <div style={{border:'1px solid pink', margin:'10px', padding:'10px', borderRadius:'20px'}}>
        <p>Name : {name}</p>
        <p>comment : {body}</p>
    </div>
  )
}

export default CommentDetails
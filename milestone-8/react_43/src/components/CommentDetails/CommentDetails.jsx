import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'


const CommentDetails = () => {
    const comment=useLoaderData();
    const {name, body}=comment
    const navigate = useNavigate();

  return (
    <div style={{border:'1px solid pink', margin:'10px', padding:'10px', borderRadius:'20px'}}>
        <p>Name : {name}</p>
        <p>comment : {body}</p>
       
        <button onClick={()=>navigate(-1)}> Previous </button>
    </div>
  )
}

export default CommentDetails
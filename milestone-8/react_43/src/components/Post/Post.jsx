import React from 'react'
import { Link, useNavigate } from 'react-router'

const Post = ({post}) => {
    // console.log(post)
    const { id,title}=post
    const navigate=useNavigate()
    const handleNavigate=()=>{
      navigate(`/posts/${id}`)
    }
  return (
    <div style={{border:'2px solid red',margin:'20px'}}>
        <h4>Single Post</h4>
        <p>{title}</p>
        <Link to={`/posts/${id}`}>
        <button>Show Details</button>
        </Link>
        <button onClick={handleNavigate}>Details of: {id}</button>

    </div>
  )
}

export default Post
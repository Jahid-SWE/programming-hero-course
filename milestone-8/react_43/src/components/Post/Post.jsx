import React from 'react'
import { Link } from 'react-router'

const Post = ({post}) => {
    // console.log(post)
    const { id,title}=post

  return (
    <div style={{border:'2px solid red',margin:'20px'}}>
        <h4>Single Post</h4>
        <p>{title}</p>
        <Link to={`/posts/${id}`}>
        <button>Show Details</button>
        </Link>

    </div>
  )
}

export default Post
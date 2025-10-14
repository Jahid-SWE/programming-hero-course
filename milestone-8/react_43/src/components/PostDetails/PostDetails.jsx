import React from 'react'
import { useLoaderData } from 'react-router'

const PostDetails = () => {
    const post= useLoaderData();
    const {body, title}=post
   
  return (
    <div>
        <p>Title: {title}</p>
        <p>body {body}</p>

    </div>
  )
}

export default PostDetails
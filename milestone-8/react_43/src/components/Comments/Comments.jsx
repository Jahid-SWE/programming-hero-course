import React from 'react'
import { useLoaderData } from 'react-router'
import Comment from '../Comment/Comment';

const Comments = () => {
    const comments=useLoaderData();
    console.log(comments);
  return (
    <div>
        <h3>This is Comments Section </h3>
        {
            comments.map(comment=><Comment comment={comment}></Comment>)
        }
    </div>
  )
}

export default Comments
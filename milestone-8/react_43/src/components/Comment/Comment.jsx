import React from 'react'
import { Link } from 'react-router';

const Comment = ({comment}) => {
    // console.log(comment)
    const {id, name, body}= comment;
  return (
    <div style={{border:'1px solid pink', margin:'10px', padding:'10px', borderRadius:'20px'}}>
        
        <p>Name: {name}</p>
        <p>Name: {body}</p>
        <Link to={`/comments/${id}`}>
        <button>Show Comment</button>
        </Link>
    </div>
  )
}

export default Comment
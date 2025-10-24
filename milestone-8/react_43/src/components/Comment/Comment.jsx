import React from 'react'
import { Link, useNavigate } from 'react-router';

const Comment = ({comment}) => {
    // console.log(comment)
    const {id, name, body}= comment;
    const navigate=useNavigate()
    const handlerpost=()=>{
      navigate(`/comments/${id}`)

    }
  return (
    <div style={{border:'1px solid pink', margin:'10px', padding:'10px', borderRadius:'20px'}}>
        
        <p>Name: {name}</p>
        <p>Name: {body}</p>
        {/* <Link to={`/comments/${id}`}>
        <button>Show Comment</button>
        </Link> */}
       <button onClick={handlerpost}>Details of: {id}</button>
        
    </div>
  )
}

export default Comment
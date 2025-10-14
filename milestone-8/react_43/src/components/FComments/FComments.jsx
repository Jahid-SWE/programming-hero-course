import React from 'react'
import { useLoaderData } from 'react-router'
import FComment from '../FComment/FComment';

const FComments = () => {
    const comments=useLoaderData();
    // console.log(fComment)
  return (
    <div>
        <h4>FaceBook Comments</h4>
        {
            comments.map(comment=><FComment key={comment.id} comment={comment}></FComment>)
        }
    </div>
  )
}

export default FComments
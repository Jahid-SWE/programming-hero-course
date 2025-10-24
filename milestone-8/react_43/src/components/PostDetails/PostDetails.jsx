import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router'

const PostDetails = () => {
    const post= useLoaderData();
    const {postId}=useParams()
    console.log(postId)
    // const params=useParams()
    // console.log(params)
    const {body, title}=post
    const navigate = useNavigate();
    // const handlerGoBack= ()=>{
    //   navigate(navigate(-1)) 
    // }
   
  return (
    <div>
        <p>Title: {title}</p>
        <p>body {body}</p>
        {/* <button onClick={handlerGoBack}>Go Back</button> */}
        <button onClick={()=>navigate(-1)}> Previous </button>
    </div>
  )
}


export default PostDetails
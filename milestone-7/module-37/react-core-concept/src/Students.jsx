import React from "react"
import { use } from "react"
import './App.css'
import Student from "./Student"
function Students({commentPromise}){
    // console.log(commentPromise)
    // const {name, email, body}=commentPromise
    const comments= use(commentPromise)
    return(
        <div className="card">
            {
                comments.map(comment=><Student comment={comment}></Student>)
            }
        </div>
    )
}

export default Students
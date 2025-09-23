import React from "react";
import { use } from "react";
import Post from './Post'
function Posts({postPromise}){
    const posts= use(postPromise);
    return(
        <div className="card">
            <h5>ALl Post here {posts.length}</h5>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}
export default Posts;
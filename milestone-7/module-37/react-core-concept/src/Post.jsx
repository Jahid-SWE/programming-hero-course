function Post({post}){
    const {body, title, id}=post;
    return(
        <div className="card">
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}
export default Post;
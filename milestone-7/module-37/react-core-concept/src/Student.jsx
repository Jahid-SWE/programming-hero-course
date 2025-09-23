import './App.css'
function Student({comment}){
    const {name, email, body}=comment
    
    return(
        <div className="card">
            <h1>Name :{name}</h1>
            <h1>Email :{email}</h1>
            <h1>Body :{body}</h1>
        </div>
    )
}
export default Student;
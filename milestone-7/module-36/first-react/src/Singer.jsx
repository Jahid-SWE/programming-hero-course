import './App.css'
function Singer({singer}){
    return(
        <div className="singer">
            <h3>Name : {singer.name}</h3>
            <h3>Age : {singer.age}</h3>
        </div>
    )
}

export default Singer;
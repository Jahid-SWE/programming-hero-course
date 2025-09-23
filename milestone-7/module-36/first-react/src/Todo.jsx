// function ToDo({task, isDone, time=0}){
//     return(
//         <div>
//             <h1> {task}</h1>
//         </div>
//     )
// }

// function ToDo({task, isDOne, time}){
//     return isDOne ? <li>Done : {task} and Time : {time}</li> : <li>Not Done {task}</li>
// }



const ToDo=({task, isDone})=>{
    if(isDone===true){
        return(
        <div>
           <li>done : {task}</li>
        </div>
    )
    }
    else{
        return(
            <div>
           <li>Pending : {task}</li>
        </div>
        )
    }
}


export default ToDo
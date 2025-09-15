// function ToDo({task, isDone, time=0}){
//     return(
//         <div>
//             <h1> {task}</h1>
//         </div>
//     )
// }

function ToDo({task, isDOne, time}){
    return isDOne ? <li>Done : {task} and Time : {time}</li> : <li>Not Done {task}</li>
}






export default ToDo
import { useState } from "react";

 
function Counter(){
    const counterStyle={
        color: 'pink',
        border: '2px solid salmon',
        margin:'10px'
    }
    const [count, setCount]= useState(0);

    const handleAdd=()=>{
        const newCount = count+1;
        setCount(newCount)
    }
    const handleSub=()=>{
        const newCount = count-1;
        setCount(newCount)
    }

    return(
        <div style={counterStyle}>
            <h1>Counter : {count}</h1>
            <button onClick={handleAdd}> Add</button>
            <button onClick={handleSub}> Add</button>
        </div>
    )
}

export default Counter;
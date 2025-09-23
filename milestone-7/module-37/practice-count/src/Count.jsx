import React, { useState } from 'react'
import './App.css'

const Count = () => {
    const [count, setCount]=useState(0)
    const increaseHandaler=()=>{
        const newCount = count+1;
        setCount(newCount)
    }
    
    const decreaseHandaler=()=>{
        const newCount = count-1;
        setCount(newCount)
    }
    const reStartHandaler=()=>{
        const count= 0;
        setCount(count)
    }

    
  return (
    <div className='card'>
        <h4>Count : {count}</h4>
        <button onClick={increaseHandaler}>Increase</button>
        <button onClick={decreaseHandaler}>Decrease</button>
        <button onClick={reStartHandaler}>Decrease</button>
    </div>
  )
}

export default Count
import React, { useState } from 'react'

const Bowling = () => {
const [bowl, setBowl]=useState(0)
const BowlCount=()=>{
    const newBowl= bowl+1;
    newBowl<=6 ? setBowl(newBowl) : bowl
    
    
}
const NoBoll=()=>{
    const noBoll= bowl+0;
    setBowl(noBoll)
}


  return (
    <div>
        <h3>Now Your are Bowling </h3>
        {
            bowl===6 && <p>Over</p>
        }
        <h5>Bowl Number : {bowl}</h5>
        <button onClick={BowlCount}>Add</button>
        <button onClick={NoBoll}>NoBoll</button>
    </div>
  )
}

export default Bowling
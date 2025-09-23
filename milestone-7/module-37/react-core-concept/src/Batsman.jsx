import { useState } from "react"

function BatsMan(){
    let [runs, setRuns]=useState(0);
    let [sixes, setSixes]= useState(0);

    const singleRun=()=>{
        const newRuns= runs+1;
        setRuns(newRuns)
    }
    const double=()=>{
        const newRuns= runs+2;
        setRuns(newRuns)
    }
    const triple=()=>{
        const newRuns= runs+3;
        setRuns(newRuns)
    }
    const four=()=>{
        const newRuns= runs+4;
        setRuns(newRuns)
    }
    const six=()=>{
        const newRuns= runs+6;
        const updateSixes = sixes+1;
        setSixes(updateSixes)
        setRuns(newRuns)
    }

    return(
        <div>
            <h1>Player Bangladeshi Batsman</h1>
            <p><small>Six : {sixes}</small></p>
            {
                runs>50 && <p>You got Half-century {runs}</p>
            }
            <h4>Score : {runs} </h4>
            <button onClick={singleRun}>Single</button>
            <button onClick={double}>Double</button>
            <button onClick={triple}>Triple</button>
            <button onClick={four}>Four</button>
            <button onClick={six}> Six</button>
        </div>
    )
}

export default BatsMan
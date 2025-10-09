import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries,handleVisitedFlag}) => {
    // console.log(country)
    const [visited, setVisited]=useState(false)
    const handlerVisited=()=>{
        // first system chek true 
        //  if(visited){
        //     setVisited(false)
        //  }
        //  else{
        //     setVisited(true)
        //  }

        // Second system 
        // setVisited(visited ? false : true) 

        // Third system 
        setVisited(!visited);
        handleVisitedCountries(country);
        
    
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
        <img  src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h4 >Country : {country.population.population} </h4>
        <h4>Country : {country.name.common} </h4>
        <p>country Area : {country.area.area} {country.area.area>300000 ? 'Big-Country':'Small Country'}</p>
        <button onClick={handlerVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        <button onClick={()=>handleVisitedFlag(country.flags.flags.png)}> Add Visited Flag</button>
        </div>
    );
};

export default Country;
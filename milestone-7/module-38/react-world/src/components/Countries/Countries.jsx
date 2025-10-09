import React, { use, useState } from 'react'
import Country from '../Country/Country'
import './Countries.css'

const Countries = ( {countriesPromise}) => {
    const [vistedCountries, setVisitedCountries]=useState([])
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountries=(country)=>{
      console.log('Visited handeler country', country);
      const newVisitedCountries= [...vistedCountries, country ]
      setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag=(flag)=>{
      const newVisitedFlag=[...visitedFlag,flag]
      setVisitedFlag(newVisitedFlag)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;

  return (
    <div>
        <h1>The Country Section {countries.length}</h1>
        <h3>Total Visited Countries : {vistedCountries.length}</h3>
        <h3>Total Flags Visited Countries : {visitedFlag.length}</h3>
        <ol>
          {
            vistedCountries.map(country=> <li>{country.name.common}</li>)
          }
        </ol>

        <div className='flag-country'>
          {
            visitedFlag.map((flag, index)=> <img key={index} src={flag}></img>)
          }
        </div>
        <div className='countries'>
           {
             countries.map(country=> <Country 
              key={country.ccn3.ccn3} 
              country={country}
               handleVisitedCountries={handleVisitedCountries} 
               handleVisitedFlag={handleVisitedFlag}
               ></Country>)
           }
        </div>
    </div>
  )
}

export default Countries
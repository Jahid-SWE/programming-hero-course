import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div>
        <h4>Country : {country.name.common} </h4>
        <h4>Country : {country.population.population} </h4>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        </div>
    );
};

export default Country;
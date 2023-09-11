import { useState } from 'react';
// import '../Countries/countries.css'
import './country.css'
import CountryDetail from '../countryDetail/CountryDetail';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button><br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button><br />
            <button onClick={() => {handleVisitedFlags(country.flags.png)}}>Add Flag</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
            <hr />
            <CountryDetail 
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}

            ></CountryDetail>
        </div>
    );
};

export default Country;
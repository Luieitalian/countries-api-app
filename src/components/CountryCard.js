import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from './Theme';

function CountryCard({ country }) {
  
  const theme = useTheme();
  
  function formatPop(pop) { 
    
  }



  return(
    <Link to={`details/${country.cca3}`} style={{backgroundColor: theme.cardBackground, color: theme.text}} className='card'>
      <div className='img-container'>
        <img alt={country.flags.alt} className='flag' src={country.flags.svg}></img>
      </div>
      <div className='desc'>
        <h3>{country.name.common}</h3>
        <p>Population: <span>{country.population}</span></p>
        <p>Region: <span>{country.region}</span></p>
        <p>Capital: <span>{country.capital}</span></p>
      </div>
    </Link>
  );

}

export default CountryCard;
import React from "react";
import CountryCard from "./CountryCard";


function Content({ children, countries }) {
  
  return (
    <>
    {children}
      <div className="countries">
        {
          countries.map(country => {
            return (
              <CountryCard key={country.cca3} country={country}></CountryCard>
              );
            })
          }
      </div>
    </>
  );
}

export default Content;

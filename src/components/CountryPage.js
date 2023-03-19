import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BorderCountryButton from "./BorderCountryButton";
import { useTheme } from "./Theme";


function CountryPage({ countries }) {

  const { id } = useParams();
  const [country, setCountry] = useState(countries.filter((country) => country.cca3 === id).at(0));
  
  const theme = useTheme();
  function findTempCountry(ID) {
    return countries.filter((country) => country.cca3 === ID).at(0);
  }
  
  
  
  return (
    <>
      <div
        style={{ backgroundColor: theme.background, color: theme.text }}
        className="details-container"
        >
        <Link
          to="/"
          style={{ backgroundColor: theme.cardBackground, color: theme.text }}
          className="back-button"
          >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Link>
        <img
          alt={
            country.flags.alt
              ? country.flags.alt
              : `${country.name.common} flag`
            }
            className="flag"
            src={country.flags.svg}
            ></img>
        <div className="detailed-desc">
          <div className="desc-1">
            <div className="part-1">
              <h1>{country.name.common}</h1>
              <p>Native Name: <span>{Object.entries(country.name.nativeName).map(([key,val])=> val.common).join(', ')}</span></p>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital.join(", ")}</span>
              </p>
            </div>
            <div className="part-2">
              <p>
                Top Level Domain: <span>{country.tld.join(", ")}</span>
              </p>
              <p>
                Currencies:{" "}
                <span>{Object.entries(country.currencies).map(([key,val]) => val.name).join(', ')}</span>
              </p>
              <p>
                Languages:{" "}
                <span>{Object.entries(country.languages).map(([key,val]) => val).join(', ')}</span>
              </p>
            </div>
          </div>
          <div className="desc-2">
            <h2>Border Countries:</h2>
            {country.borders ? (
              country.borders.map((borderCountryId) => {
                return (
                  <BorderCountryButton
                  key={borderCountryId}
                  name={findTempCountry(borderCountryId).name.common}
                  />
                  );
                })
                ) : (
                  <p>No Bordering Countries</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryPage;

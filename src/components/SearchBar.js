import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "./Theme";



function SearchBar({f, searchQuery}) {

  const theme = useTheme();

  function handleInput(e){
    e.preventDefault();
    f(e.target.value);
  }

  return (
    <div className="search-bar">

      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      <input style={{backgroundColor: theme.cardBackground, color: theme.text}} value={searchQuery} onChange={handleInput} id="search" placeholder="Search for a country..." type="search"/>

    </div>
  );
}
export default SearchBar;

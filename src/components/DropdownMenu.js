import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "./Theme";


function DropdownMenu({f}) {
  
  const theme = useTheme();

  function handleClick(e) { 
    e.preventDefault();
    const optionMenu = document.getElementById('option-menu');
    if(optionMenu.style.display === 'flex'){
      optionMenu.style.display = 'none';
    } else {
      optionMenu.style.display = 'flex';
    }
  }

  return (
    <div id="dropdown">
      
      <button style={{backgroundColor: theme.cardBackground, color: theme.text}} onClick={handleClick} id="drop-button">
        Filter by Region
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      <div style={{backgroundColor: theme.cardBackground, color: theme.text}} id="option-menu">
        <span onClick={(e)=>{handleClick(e);f("")}}>Reset</span>
        <span onClick={(e)=>{handleClick(e);f("Africa")}}>Africa</span>
        <span onClick={(e)=>{handleClick(e);f("America")}}>America</span>
        <span onClick={(e)=>{handleClick(e);f("Asia")}}>Asia</span>
        <span onClick={(e)=>{handleClick(e);f("Europe")}}>Europe</span>
        <span onClick={(e)=>{handleClick(e);f("Oceania")}}>Oceania</span>
      </div>
      
    </div>
  );
}



export default DropdownMenu;

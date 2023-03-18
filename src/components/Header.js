import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "./Theme";

function Header({switchTheme}) {

  const theme = useTheme();

  return (
    <header style={{backgroundColor: theme.cardBackground, color: theme.text}}>
      <h1>Where in the world?</h1>
      <div onClick={switchTheme} className="mode-switch">
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark Mode</span>
      </div>
    </header>
  );
  
}

export default Header;

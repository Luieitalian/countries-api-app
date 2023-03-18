import React from 'react';
import { useTheme } from './Theme';



function BorderCountryButton({name}) {

  const theme = useTheme();

  return(
    <button style={{backgroundColor: theme.cardBackground, color: theme.text}} className='border-country-button'>{name}</button>
  );
}

export default BorderCountryButton;
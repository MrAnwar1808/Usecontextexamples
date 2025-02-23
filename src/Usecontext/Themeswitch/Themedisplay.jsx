

import React, { useContext } from 'react';
import { ThemeContext } from './Themeprovider';


function ThemeDisplay() {
  const { isDarkTheme } = useContext(ThemeContext);  

  return (
    <div style={{ backgroundColor: isDarkTheme ? '#333' : '#FFF', color: isDarkTheme ? '#FFF' : '#000', padding: '40px' }}>
      <h2>Current Theme: {isDarkTheme ? 'Dark' : 'Light'}</h2>
    </div>
  );
};

export default ThemeDisplay;

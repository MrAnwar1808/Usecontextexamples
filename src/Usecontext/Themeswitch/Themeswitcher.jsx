

import React, { useContext } from 'react';
import { ThemeContext } from './Themeprovider';


function ThemeSwitcher () {
  const { toggleTheme } = useContext(ThemeContext);  // Access toggleTheme function

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;

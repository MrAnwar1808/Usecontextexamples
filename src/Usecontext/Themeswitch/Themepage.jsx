

import React from 'react';
import { ThemeProvider } from './Themeprovider';
import ThemeDisplay from './Themedisplay';
import ThemeSwitcher from './Themeswitcher';



function Themepage(){
  return (
    
    <ThemeProvider>
      <div>
        <h1>Theme Switcher Example</h1>
        <ThemeDisplay />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default Themepage;

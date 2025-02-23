

import React from 'react';
import Greeting from './Greeting';
import LanguageSwitcher from './Languageswitcher';
import { LanguageProvider } from './Languageprovider';




function Languagepage ()  {
  return (
    <LanguageProvider>
      <div>
        <h1>Language Switcher Example</h1>
        <Greeting />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
};

export default Languagepage;



import React, { useContext } from 'react';
import { LanguageContext } from './Languageprovider';


function LanguageSwitcher () {
  const { switchLanguage } = useContext(LanguageContext);  

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;

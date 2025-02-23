

import React, { useContext } from 'react';
import { LanguageContext } from './Languageprovider';


function Greeting  () {
  const { language } = useContext(LanguageContext); 

  const greeting = language === 'en' ? 'Hello!' : language === 'es' ? '¡Hola!' : 'Hello!';

  return <h2>{greeting}</h2>;
};

export default Greeting;

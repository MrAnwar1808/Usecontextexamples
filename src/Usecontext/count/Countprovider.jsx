
// CountContext.js
import React, { createContext, useState } from 'react';

// Create a Context
const CountContext = createContext();

// Create a Provider Component
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCount = () => setCount(prevCount => prevCount + 1);

  // Function to decrement the counter
  const decrementCount = () => setCount(prevCount => prevCount - 1);

  return (
   
      <CountContext.Provider value={{ count, incrementCount, decrementCount }}>
        {children}
      </CountContext.Provider>
      
    
  );
};

export { CountProvider, CountContext };


// CounterDisplay.js
import React, { useContext } from 'react';
import { CountContext } from './Countprovider';


const CounterDisplay = () => {
  const { count } = useContext(CountContext);  // Accessing the count value from context

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default CounterDisplay;

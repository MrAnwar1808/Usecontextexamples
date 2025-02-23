
// CounterControls.js
import React, { useContext } from 'react';
import { CountContext } from './Countprovider';


const CounterControls = () => {
  const { incrementCount, decrementCount } = useContext(CountContext);  // Accessing functions from context

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default CounterControls;

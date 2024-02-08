import React from 'react';
import IncrementButton from './IncrementButton';

const Counter = ({ count, increment }) => {
  return (
    <div>
        <h2>Counter: { count }</h2>
        <IncrementButton 
          increment = {increment}      
        />
    </div>
  )
}

export default Counter;
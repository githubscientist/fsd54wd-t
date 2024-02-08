import React from 'react';
import IncrementButton from './IncrementButton';

const Counter = ({ count, setCount }) => {
  return (
    <div>
        <h2>Counter: { count }</h2>
        <IncrementButton 
            count={count}
            setCount={setCount}      
        />
    </div>
  )
}

export default Counter;
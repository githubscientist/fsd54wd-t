import React, { useState } from 'react';
import Counter from '../components/Counter';
import ResetButton from '../components/ResetButton';

const CounterContainer = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
      setCount(count + 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div>
      <Counter
        count={count}
        increment={increment}
      />
      <ResetButton 
        reset = {reset}
      />
    </div>
  )
}

export default CounterContainer;
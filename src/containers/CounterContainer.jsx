import React, { useState } from 'react';
import Counter from '../components/Counter';
import ResetButton from '../components/ResetButton';

const CounterContainer = () => {

  const [count, setCount] = useState(0);

  return (
      <div>
      <Counter
        count={count}
        setCount={setCount}
      />
      <ResetButton 
        setCount={setCount}
      />
    </div>
  )
}

export default CounterContainer;
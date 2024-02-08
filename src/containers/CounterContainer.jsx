import React, { createContext, useState } from 'react';
import Counter from '../components/Counter';
import ResetButton from '../components/ResetButton';

const CounterContext = createContext();

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
      <CounterContext.Provider value={{count, increment, reset}}>
        <Counter />
        <ResetButton />
      </CounterContext.Provider>
    </div>
  )
}

export { CounterContainer as default, CounterContext};
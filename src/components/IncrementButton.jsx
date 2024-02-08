import React, { useContext } from 'react';
import { CounterContext } from '../containers/CounterContainer';

const IncrementButton = () => {

  const { increment} = useContext(CounterContext);

  return (
      <button onClick={increment}>Increment</button>
  )
}

export default IncrementButton;
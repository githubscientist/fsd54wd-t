import React, { useContext } from 'react';
import { useCounter } from '../contexts/CounterContext';

const IncrementButton = () => {

  const { increment} = useCounter();

  return (
      <button onClick={increment}>Increment</button>
  )
}

export default IncrementButton;
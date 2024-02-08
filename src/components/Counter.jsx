import React from 'react';
import IncrementButton from './IncrementButton';
import { useCounter } from '../contexts/CounterContext';

const Counter = () => {

  const { count } = useCounter();

  return (
    <div>
        <h2>Counter: { count }</h2>
        <IncrementButton />
    </div>
  )
}

export default Counter;
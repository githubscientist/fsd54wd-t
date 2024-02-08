import React, { useContext } from 'react';
import IncrementButton from './IncrementButton';
import { CounterContext } from '../containers/CounterContainer';

const Counter = () => {

  const { count } = useContext(CounterContext);

  return (
    <div>
        <h2>Counter: { count }</h2>
        <IncrementButton />
    </div>
  )
}

export default Counter;
import React, { useContext } from 'react';
import { useCounter } from '../contexts/CounterContext';

const ResetButton = () => {

  const { reset } = useCounter();

  return (
      <button onClick={reset}>Reset</button>
  )
}

export default ResetButton;
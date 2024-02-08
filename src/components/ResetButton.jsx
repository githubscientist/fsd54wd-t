import React, { useContext } from 'react';
import { CounterContext } from '../containers/CounterContainer';

const ResetButton = () => {

  const { reset } = useContext(CounterContext);

  return (
      <button onClick={reset}>Reset</button>
  )
}

export default ResetButton;
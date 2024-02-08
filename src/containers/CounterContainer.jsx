import React from 'react';
import Counter from '../components/Counter';
import ResetButton from '../components/ResetButton';
import { CounterProvider } from '../contexts/CounterContext';

const CounterContainer = () => {

  return (
    <CounterProvider>
      <Counter />
      <ResetButton />
    </CounterProvider>
  )
}

export { CounterContainer as default};
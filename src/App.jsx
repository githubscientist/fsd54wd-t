/*
  Context API

  - Context API is a way to pass data through the component tree without having to pass props down manually at every level.
  - Context API is a way to have a global state in your application.
  - It has a Provider and a Consumer.

  Theme: 
    - A simple counter application with increment and reset button.
*/

import React from 'react';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
    </div>
  )
}

export default App;
import React from 'react';

const IncrementButton = ({ increment }) => {

  return (
      <button onClick={increment}>Increment</button>
  )
}

export default IncrementButton;
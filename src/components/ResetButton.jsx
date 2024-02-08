import React from 'react';

const ResetButton = ({ setCount }) => {

  const reset = () => {
    setCount(0);
  }

  return (
      <button onClick={reset}>Reset</button>
  )
}

export default ResetButton;
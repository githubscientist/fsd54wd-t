import React from 'react';

const IncrementButton = ({ count, setCount }) => {

    const handleIncrement = () => {
        setCount(count + 1);
    }

  return (
      <button onClick={handleIncrement}>Increment</button>
  )
}

export default IncrementButton;
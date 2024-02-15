/*
  useReducer hook is used to manage the state of the application.

  - despite useState hook, useReducer hook is used when the state logic is complex and involves multiple sub-values or when the next state depends on the previous one.

  - useReducer hook is similar to Redux, but it is built into React.

  - Here, we will put the state logic in a separate file and import it into the component.
*/

import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    
    case 'DECREMENT':
      return state - 1;
  
    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const decrement = () => {
    // complete the decrement function
    dispatch({ type: 'DECREMENT' });
  }

  const reset = () => {
    // complete the reset function
    dispatch({ type: 'RESET' });
  }

  return (
    <>
      <h3>Counter: { state }</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h3>Clicks History</h3>
      <p>{  }</p>
    </>
  )
}

export default App;
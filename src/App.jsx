/*
  useReducer hook is used to manage the state of the application.

  - despite useState hook, useReducer hook is used when the state logic is complex and involves multiple sub-values or when the next state depends on the previous one.

  - useReducer hook is similar to Redux, but it is built into React.

  - Here, we will put the state logic in a separate file and import it into the component.
*/

import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [clicksHistory, setClicksHistory] = useState([]);

  const increment = () => {
    setCount(count + 1);
    setClicksHistory([...clicksHistory, 'Incr']);
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setClicksHistory([...clicksHistory, 'Decr']);
    }
  }

  const reset = () => {
    setCount(0);
    setClicksHistory([...clicksHistory, 'Reset']);
  }

  return (
    <>
      <h3>Counter: { count }</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h3>Clicks History</h3>
      <p>{ clicksHistory.join(', ') }</p>
    </>
  )
}

export default App;
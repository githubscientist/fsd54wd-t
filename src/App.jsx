/*
  useReducer hook is used to manage the state of the application.

  - despite useState hook, useReducer hook is used when the state logic is complex and involves multiple sub-values or when the next state depends on the previous one.

  - useReducer hook is similar to Redux, but it is built into React.

  - Here, we will put the state logic in a separate file and import it into the component.
*/
import Counter from "./components/Counter";
import History from "./components/History";
import { CounterContextProvider } from "./contexts/CounterContext";


const App = () => {

  return (
    <>
      <CounterContextProvider>
        <Counter />
        <History />
      </CounterContextProvider>
    </>
  )
}

export default App;
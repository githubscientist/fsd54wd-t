import { useContext } from "react";
import CounterContext from "../contexts/CounterContext";
import Button from "./Button";

const Counter = () => {

    const [state] = useContext(CounterContext);

  return (
    <>
        <h3>Counter: {state.counter}</h3>
        <Button 
            type="INCREMENT"
            label='Increment'
        />
        <Button 
            type="DECREMENT"
            label='Decrement'
        />
        <Button 
            type="RESET"
            label='Reset'
        />
    </>
  )
}

export default Counter;
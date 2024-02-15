import { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

const History = () => {

    const [state] = useContext(CounterContext);

  return (
    <>
      <h3>Clicks History</h3>
      <p>{ state.clicks.join(', ') }</p>      
    </>
  )
}

export default History;
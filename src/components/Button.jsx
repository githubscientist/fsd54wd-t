import { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

const Button = ({ type, label }) => {

    const [, dispatch] = useContext(CounterContext);

  return (
    <button onClick={() => dispatch({ type })}>
          { label }
    </button>
  )
}

export default Button;
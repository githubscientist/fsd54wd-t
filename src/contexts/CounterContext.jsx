import { createContext, useReducer } from "react";

const initialState = {
  counter: 0,
  clicks: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
        clicks: [...state.clicks, 'Incr']
      };
    
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
        clicks: [...state.clicks, 'Decr']
      };
  
    case 'RESET':
      return {
        ...state,
        counter: 0,
        clicks: [...state.clicks, 'Reset']
      };
    
    default:
      return state;
  }
}

const CounterContext = createContext();

export const CounterContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={[state, dispatch]}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContext;
import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <CounterContext.Provider value={{count, increment, reset}}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = () => {
    return useContext(CounterContext);
}
/*
  useEffect: 
    - useEffect is a hook that allows you to perform side effects in function components
    - side effects are anything that affects something outside of the scope of the function
      - examples: 
        - fetching data
        - setting up a subscription
        - manually changing the DOM
    - we can use useEffect in two ways:
      a. to run code only when the component mounts
      b. to run code when the component mounts and when it updates


    Type I:
    
    useEffect without a dependency array argument: runs code when the component mounts and when it update or re-renders

    syntax:

    useEffect(() => {
      // code to run when the component mounts and when it updates
    });

    Type II:

    useEffect with an empty dependency array argument: runs code only when the component mounts

    syntax:

    useEffect(() => {
      // code to run when the component mounts
    }, []);

    Type III:

    useEffect with a dependency array argument: runs code when the component mounts and when the value of the dependency array argument changes

    syntax:

    useEffect(() => {
      // code to run when the component mounts and when the value of the dependency array argument changes
    }, [arg1, arg2, arg3]);


*/

import { useEffect, useState } from "react";

// using dependency array in useEffect hook using a simple counter app
const App = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect hook ran");
    console.log("counter: ", counter);

    // trigger the change in counter state by clicking the button

  }, [counter]);

  return (
    <div>
      <p>Counter: {counter}</p>
      
      <button onClick={() => setCounter(counter + 1)}>Update Counter</button>
    </div>
  )
}

export default App;
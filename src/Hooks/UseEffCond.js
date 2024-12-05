// useEffect is a React hook that allows you to perform side effects in your functional components.
//Side effects include things like data fetching, subscriptions, or manually updating the DOM.
//This hook is used to synchronize the component with external systems or perform tasks that are not directly related to rendering U

import { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Parameter is a function, which gets executed after every render of the component
  // UseEffect runs after every render of the component
  // UseEffect is placed inside component

  // For conditionally executing an effect - we pass in a second parameter
  // This parameter is an array
  // Within this array, we need to specify, either props or state we need to watch for
  // Only those props or states specified in this array change, the effect will be executed

  // Here for example the useeffect will be executed if the count changes
  useEffect(() => {
    console.log("UseEffect - Updating document title");
    document.title = `You clicked  ${count} times`;
  }, [count]);

  // Run effect only once

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </>
  );
}

export default UseEffectHook;

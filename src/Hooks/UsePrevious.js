import react, { useState } from "react";

function UsePrevious() {
  const [count, setcount] = useState(0);

  const incrementfive = () => {
    for (let i = 0; i < 5; i++) {
      // setcount(count + 1);
      setcount(prevCount => prevCount + 1)
    }
  };
  
  return (
    <div>
      <h1>Count : {count} </h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setcount(0);
        }}
      >
        Reset
      </button>
      <button onClick={incrementfive}>IncrementFive</button>
    </div>
  );
}

export default UsePrevious;

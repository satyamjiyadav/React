import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter : 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return {...state, firstCounter: state.firstCounter + action.value};
    case "dec":
      return {...state, firstCounter: state.firstCounter - action.value };
    case "inc2":
        return {...state, secondCounter: state.secondCounter + action.value };
    case "dec2":
        return {...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count1 : {count.firstCounter} </h1>
      <h1>Count2 : {count.secondCounter} </h1>
      <button onClick={() => dispatch({ type: "inc", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 1 })}>
        Deccrement
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 1 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "inc", value: 5})}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "dec", value: 5 })}>
        Decrement5
      </button>
      <button onClick={() => dispatch({ type: "inc2", value: 4})}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "dec2", value: 4 })}>
        Decrement2
      </button>
    </div>
  );
}

export default Counter2;

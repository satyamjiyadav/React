import React,{useReducer} from 'react'


// A reducer is a function hat decides how the state should change based on the 
// action . The reducer takes the current state and an action, and returns a new state

// Things to remember
// Reducers must always return a new state.
// They should never modify the old state directly

const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'inc' :
            return state + 1
        case 'dec' :
            return state - 1
        case 'reset' :
            return initialState
        default :
            return state
    }
}

function Counter1() {

    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>Count : {count} </h1>
      <button onClick={() => dispatch('inc')} >Increment</button>
      <button onClick={() => dispatch('dec')}>Deccrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Counter1

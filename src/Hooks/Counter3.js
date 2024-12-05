import React,{useReducer} from 'react'

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
// 1 5 2
function Counter3() {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>Count : {count} </h1>
        <h1>Count2 : {count2} </h1>
      <button onClick={() => dispatch('inc')} >Increment</button>
      <button onClick={() => dispatch('dec')}>Deccrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>

      <button onClick={() => dispatch2('inc')} >Increment2</button>
      <button onClick={() => dispatch2('dec')}>Deccrement2</button>
      <button onClick={() => dispatch2('reset')}>Reset2</button>
    </div>
  )
}

export default Counter3

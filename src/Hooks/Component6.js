import React,{useContext} from 'react'
import { countContext } from '../App'

function Component6() {
  const CountContext = useContext(countContext);
  return (
    <div>
       <h1> Component 6</h1>
      <button onClick={() => CountContext.countDispatch('inc')} >Increment</button>
      <button onClick={() => CountContext.countDispatch('dec')}>Deccrement</button>
      <button onClick={() => CountContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default Component6

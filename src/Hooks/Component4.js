import React,{useContext} from 'react'
import { countContext } from '../App'

function Component4() {
  const CountContext = useContext(countContext);
  return (
    <div>
      <h1>Component4</h1>
      <button onClick={() => CountContext.countDispatch('inc')} >Increment</button>
      <button onClick={() => CountContext.countDispatch('dec')}>Deccrement</button>
      <button onClick={() => CountContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default Component4

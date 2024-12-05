import React,{useState} from 'react'
import CustomCount from './CustomCount'; 

function UseCounter2() {
    // mistake yaha array me mat  element dalna[] 
    const {count, inc, dec, reset }= CustomCount()

  return (
    <div>
        <h1>Count : {count}</h1>
      <button onClick = {inc} >Inc</button>
      <button onClick = {dec} >Dec</button>
      <button onClick = {reset}>Reset</button>
    </div>
  )
}

export default UseCounter2

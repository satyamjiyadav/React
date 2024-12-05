import React,{useState} from 'react'

function UseCounter1() {
    const [count, setcount] = useState(0)

    const inc  = () => {
        setcount(prevcount => prevcount + 1);
    }

    const dec = () => {
        setcount(prevcount => prevcount - 1)
    }

    const reset = () => {
        setcount(0);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
      <button onClick = {inc} >Inc</button>
      <button onClick = {dec} >Dec</button>
      <button onClick = {reset}>Reset</button>
    </div>
  )
}

export default UseCounter1

import React,{useState, useEffect} from 'react'
import CustomTitle from './CustomTitle';

function DocTitle2() {
    const [count, setcount] = useState(0)

  return (
    <div>
        <CustomTitle count = {count}/>
      <button onClick = {() => setcount(count + 1)} >Count - {count}</button>
    </div>
  )
}

export default DocTitle2

import React,{useState, useEffect} from 'react'

function DocTitle1() {
    const [count, setcount] = useState(0)

    useEffect (() => {
        document.title = `count ${count}`
    }, [count])

  return (
    <div>
      <button onClick = {() => setcount(count + 1)} >Count - {count}</button>
    </div>
  )
}

export default DocTitle1

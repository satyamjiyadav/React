import React,{useState, useMemo} from 'react'

function Counter() {
    const [count1 , setcount1] = useState(0);
    const [count2 , setcount2] = useState(0);

    const incr1 = ()=>{
        setcount1(count1 + 1);
    }

    const incr2 = ()=>{
        setcount2(count2 + 1);
    }

    const iseven = useMemo( () =>{
        let i = 0
        while(i < 2000000) i++
        return count1%2 == 0
    },[count1])

    // const iseven = () => {
    //     // if we do thiis the our fuunction is slow and ui update is slow
    //     // let i = 0;
    //     // while(i < 200000000000) i++
    //     // Abb hmme memoizaion krna hoga
    //     return count1%2 == 0;
    // }


  return (
    <div>
        <h1>Count1 - {count1}</h1>
        <span>{iseven ? 'Even' : 'Odd'} </span>
        <button onClick = {incr1}>Count1 </button>

        <h1>Count2 - {count2}</h1>
        <button onClick = {incr2}>Count2 </button>

    </div>
  )
}

export default Counter

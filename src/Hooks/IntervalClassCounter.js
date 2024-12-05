import React,{useEffect, useState} from 'react'

function IntervalClassCounter() {
    const [count, setcount] = useState(100);

    const tick = () => {
        setcount(count - 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
        <h1> click times : {count}</h1>
        </div>
    )
}

export default IntervalClassCounter;

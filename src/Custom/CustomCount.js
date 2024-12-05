import React, {useState}from 'react'

function CustomCount() {
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

    return {count, inc, dec, reset};
}

export default CustomCount

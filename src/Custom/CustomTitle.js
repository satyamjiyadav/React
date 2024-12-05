import React,{useEffect} from 'react'

function CustomTitle({count}) {

    useEffect(() => {
        document.title = `count ${count}`
    }, [count])

    return null;
}

export default CustomTitle

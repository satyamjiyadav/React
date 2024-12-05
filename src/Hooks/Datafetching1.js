import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Datafetching1() {
    const [loading , setloading] = useState(true);
    const [error, seterror] = useState('');
    const [post, setpost] = useState({});

    useEffect ( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setloading(false)
            setpost(response.data)
            seterror('')
        })
        .catch(error => {
            setloading(false)
            setpost({})
            seterror('SomeThing went wrong')
        })
    }, [])
  return (
    <div>
      {loading ? 'loading' : post.title}
      {error ? error : null}
    </div>
  )
}

export default Datafetching1

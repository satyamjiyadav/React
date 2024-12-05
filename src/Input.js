import React,{useState} from 'react';
function Input()
{

    const [data,setData] = useState(null);
    const [print,setprint] = useState(false);
    function getData(val)
    {
        // console.log(val.target.value);
        setData(val.target.value);
        setprint(false);
    }
    return(
        <div>
            <h1>Get Input box value  : {data}</h1>

            {
                print == true ? <h1>{data}</h1> : null
            }
            <input type="text" onChange={getData}></input>
            <button onClick={()=>setprint(true)}>Print Data</button>
        </div>
    )
}

export default Input;
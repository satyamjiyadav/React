import {useState }from "react";
//useState bhi le skte hai hmm React ki jagah
function State()
{
    // const [data,setData] = useState("Satyam chandal")
    const [data,setData] = useState(0)


    // let data = "Satyam chandal";
    function UpdateData()
    {
        // data = "Satyam yadav"
        // alert(data);
        // setData("satyam yadav");
        setData(data+1);
    }

    function add(){
        setData(data+1);
    }
    function sub(){ 
        setData(data-1);
    }
    function Reset(){
        setData(0);
    }
    return (
        <div>
            <h1>State in  react</h1>
            <h1>{data}</h1>
            <button onClick = {add}>Add</button>
            <button onClick = {sub}>Sub</button>
            <button onClick = {Reset}>Reset</button>
        </div>
    )
}
export default State;
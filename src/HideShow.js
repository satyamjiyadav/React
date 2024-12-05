// import React,{useState} from 'react';
// function HideShow()
// {
//     const [status , setStatus] = useState(false);
//     return(
//         <div>
//             <h1>Hello Hide and Show</h1>
//             {
//                 status==true ? <h1 style={{backgroundColor : "pink"}}>Hello satyam</h1> : null
//             }
            
//             <button onClick={()=>setStatus(false)}>Hide</button>
//             <button onClick={()=>setStatus(true)}>Show</button>
//             <button onClick={()=>setStatus(!status)}>Toggle</button>
//         </div>
//     )
// }

// export default HideShow;

import React, {useState} from 'react';

function HideShow()
{
    const [status , setStatus] = useState(false);

    return(
        <div>
            <h1>HideShow jadoo</h1>
                {
                    status == true ? <h1> Satyam present </h1> : null
                }

                <button onClick = {() => setStatus(false)}>Hide</button>
                <button onClick = {() => setStatus(true)}>Show</button>
                <button onClick = {() => setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default HideShow;
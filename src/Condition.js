import React from 'react';
import { useState } from 'react';

function Condition(){
    const [In, setIn] = useState(false);
    const [num, setnum] = useState(2);
    // if(In)
    // {
    //     return(
    //         <div>
    //             <h1>Welcome Satyam Yadav</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Welcome Paras Upadhyay</h1>
    //         </div>
    //     )
    // }

    return(
        <div>
            {In ? <h1>Welcome satyam</h1> : <h1>Welcome paras</h1>}
            {num==1 ? <h1>One is here</h1> : num==2 ? <h1>Two</h1> : <h1>Three is heere</h1>}
        </div>
    )
}

export default Condition;
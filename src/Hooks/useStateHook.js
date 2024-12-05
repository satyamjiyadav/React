// import React , {Component}from "react";

// class UseStateHook extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             count : 0,
//         };
//     }

//     render()
//     {
//         return(
//             <div>
//                 <h1>Count  : {this.state.count} </h1>
//                 <button onClick = {()=> this.setState ({count : this.state.count + 1})}>Increment</button>
//             </div>
//         )
//     }
// }

// export default UseStateHook;



//------------------------using useState Hook------------------
// import react,{useState} from 'react'

// function UseStateHook(){
//     const [count, setcount] = useState(0);
//     return(
//         <div>
//             <h1>Count ; {count} </h1>
//             <button onClick = {()=> {setcount(count + 1)}}>Increment</button>
//             <button onClick = {()=> {setcount(count - 1)}}>Decrement</button>
//         </div>
//     )
// }

// export default UseStateHook;


// use state data fetching
// import { useState } from 'react';

// export default function UseStateHook() {
//   const [text, setText] = useState('');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={text} onChange={handleChange} />             
//       <p>You typed: {text}</p>                                            
//       <button onClick={() => setText('')}>                            
//         Reset
//       </button>
//     </>
//   );
// }


// import { useState } from 'react';

// export default function useStateHook() {
//   const [liked, setLiked] = useState(true);

//   function handleChange(e) {
//     setLiked(e.target.checked);
//   }

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={liked}
//           onChange={handleChange}
//         />
//         I liked this
//       </label>
//       <p>You {liked ? 'liked' : 'did not like'} this.</p>
//     </>
//   );
// }



import { useState } from 'react';

export default function useStateHook() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
         {form.email}
      </p>
    </>
  );
}
import { Component, useState } from "react";
import React, { useEffect } from "react";

// class UseEffect extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click{this.state.count}{" "}
//         </button>
//       </div>
//     );
//   }
// }

function UseEffect(){
    const [count, setcount] = useState(0);

    useEffect(() =>{
        document.title = `you click ${count} times`
    },[count])
    return(
        <div>
            <h1>count : {count}</h1>
            <button onClick = {() => setcount(count+1)} >Click</button>
        </div>
    )
}

export default UseEffect;

// it is the close replacement for componentDidMount and componentDidUpdate and componentWillUnmount
// three life cycle method can be handled by useEffect hook

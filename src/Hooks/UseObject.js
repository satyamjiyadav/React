import react, { useState } from "react";

function UseObject() {
  const [name, setname] = useState({ firstName: " ", lastName: " " });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
        // spread operator to handle manual change ...name -> to preserve last property
          onChange={(e) => setname({...name, firstName: e.target.value })}
        ></input>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setname({...name, lastName: e.target.value })}
        ></input>
        <h1>Your first name is : {name.firstName}</h1>
        <h1>Your second name is : {name.lastName}</h1>
        <h1>{JSON.stringify(name)} </h1>
      </form>
    </div>
  );
}

export default UseObject;

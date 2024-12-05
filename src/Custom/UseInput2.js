import React, { useState} from 'react'
import CustomInput from './CustomInput';

function UseInput2() {
    const { value: FirstName, onChange: handleFirstNameChange } = CustomInput('');
    const { value: LastName, onChange: handleLastNameChange } = CustomInput('');
  
    const handler = (e) => {
      e.preventDefault();
      alert(`Hello ${FirstName} ${LastName}`);
    };
  
    return (
      <div>
        <form onSubmit={handler}>
          <div>
            <label>First Name</label>
            <input type="text" value={FirstName} onChange={handleFirstNameChange} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" value={LastName} onChange={handleLastNameChange} />
          </div>
  
          <h1>{FirstName} {LastName}</h1>
  
          <button>Submit</button>
        </form>
      </div>
    );
}

export default UseInput2

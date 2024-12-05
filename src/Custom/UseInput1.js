import React, { useState} from 'react'

function UseInput1() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState(''); 

    const handler = e => {
        e.preventDefault()
        alert(`Hello ${FirstName} ${LastName}`)
    }
    
  return (
    <div>
      <form onSubmit={handler}>
        <div>
            <label>first name</label>
            <input type="text" value = {FirstName} onChange = {(e) => setFirstName(e.target.value)} ></input>
        </div>
        <div>
            <label>second name</label>
            <input type="text" value = {LastName} onChange = {(e) => setLastName(e.target.value)} ></input>
        </div>

        <h1>{FirstName} {LastName}</h1>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default UseInput1

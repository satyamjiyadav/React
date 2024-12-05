import React from 'react'

class Stud extends React.Component{
    constructor(){
        super();
        console.log("constructor");
    }
    componentWillUnmount()
    {
        alert("componentWillUnmount is called")
    }
    render()
    {
        return<h1>Student Component</h1>
    }
}

export default Stud;
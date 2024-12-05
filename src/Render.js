import React from 'react'
class Render extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "satyam@test.com"
        }
    }
    render() {
        console.warn("Render method", this.state.email)
        return (
            <div>
                <h1>User Component </h1>
                <button onClick={() => this.setState({ email: "paras@test.com" })}>Update Email</button>
            </div>
        )
    }
}

export default Render;
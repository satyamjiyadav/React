import React, { Component } from 'react';

class FileDisplay extends Component {
  // Constructor to initialize state and bind methods
  constructor(props) {
    super(props);

    // Define a constant for the file name
    const fileName = 'lecture.txt';

    // Initialize state with the file name
    this.state = {
      fileName: fileName,
    };
  }

  render() {
    return (
      <div>
        <h1>File Viewer</h1>
        <p>File Name: {this.state.fileName}</p>
      </div>
    );
  }
}

export default constr;

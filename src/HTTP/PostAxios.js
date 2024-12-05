import React, { useState } from 'react';
import axios from 'axios';

function PostAxios() {
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    const postData = {
      title: 'React POST Request',
      body: 'This is a sample POST request from React',
      userId: 1,
    };

    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setResponse(res.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>POST Request Example (axios)</h1>
      <button onClick={handleSubmit}>Send POST Request</button>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PostAxios;

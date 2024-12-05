import React, { useState } from 'react';

function PostFetch() {
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    const postData = {
      title: 'React POST Request',
      body: 'This is a sample POST request from React',
      userId: 1,
    };

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>POST using fetch</h1>
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

export default PostFetch;

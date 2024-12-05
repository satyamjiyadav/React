import React, { useState } from 'react';

function PutFetch() {
  const [updatedPost, setUpdatedPost] = useState({ title: '', body: '' });
  const postId = 1; // Example post ID to update

  const updatePost = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });
      const data = await response.json();
      console.log('Post updated:', data);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <h1>Update Post (Fetch)</h1>
      <input
        type="text"
        placeholder="Updated Title"
        value={updatedPost.title}
        onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Updated Body"
        value={updatedPost.body}
        onChange={(e) => setUpdatedPost({ ...updatedPost, body: e.target.value })}
      />
      <button onClick={updatePost} style={{ marginLeft: '10px' }}>
        Update Post
      </button>
    </div>
  );
};

export default PutFetch;

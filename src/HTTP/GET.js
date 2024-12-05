import React, { useState, useEffect } from 'react';

const GET = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  // Base API URL
  const API_URL = 'http://localhost:3001/posts';

  // GET Request
  const fetchPosts = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  };

  // POST Request
  const createPost = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newPost.title, body: newPost.body }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post created:', data);
        fetchPosts();
        setNewPost({ title: '', body: '' }); // Clear input fields after creation
      })
      .catch((error) => console.error('Error creating post:', error));
  };

  // PUT Request
  const updatePost = (postId) => {
    fetch(`${API_URL}/${postId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: postId,
        title: 'Updated Title',
        body: 'Updated Content',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post updated:', data);
        fetchPosts();
      })
      .catch((error) => console.error('Error updating post:', error));
  };

  // DELETE Request
  const deletePost = (postId) => {
    fetch(`${API_URL}/${postId}`, { method: 'DELETE' })
      .then(() => {
        console.log(`Post ${postId} deleted`);
        fetchPosts();
      })
      .catch((error) => console.error('Error deleting post:', error));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>HTTP Requests with Real JSON Server</h1>

      <div>
        <h3>Create a New Post</h3>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={createPost} style={{ padding: '5px 10px' }}>
          Create Post
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>All Posts</h3>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button
              onClick={() => updatePost(post.id)}
              style={{ marginRight: '10px', padding: '5px 10px' }}
            >
              Update
            </button>
            <button
              onClick={() => deletePost(post.id)}
              style={{ padding: '5px 10px' }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GET;

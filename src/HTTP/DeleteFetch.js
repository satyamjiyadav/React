import React, { useState, useEffect } from 'react';

const DeleteFetch = () => {
  const [posts, setPosts] = useState([]);

  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await fetch(`${API_URL}/${postId}`, { method: 'DELETE' });
      console.log(`Post with ID ${postId} deleted`);

      // Update the state to reflect deletion
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DeleteFetch;

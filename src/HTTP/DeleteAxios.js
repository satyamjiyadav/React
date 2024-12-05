import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DeleteAxios()  {
  const [posts, setPosts] = useState([]);

  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`${API_URL}/${postId}`);
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
        <div
          key={post.id}
          style={{border: '1px solid #ccc',padding: '10px',marginBottom: '10px',}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DeleteAxios;

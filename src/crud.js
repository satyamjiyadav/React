import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editPost, setEditPost] = useState(null);

  // Fetch posts from API
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create a new post
  const handleCreate = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      setPosts([response.data, ...posts]); // Add new post to the list
      setNewPost({ title: '', body: '' }); // Reset input fields
    } catch (error) {
      console.log(error);
    }
  };

  // Edit a post
  const handleEdit = (post) => {
    setEditPost(post); // Set the post to edit
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(https://jsonplaceholder.typicode.com/posts/${editPost.id}, editPost);
      setPosts(posts.map((post) => (post.id === editPost.id ? response.data : post))); // Update the post in the list
      setEditPost(null); // Clear edit mode
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a post
  const handleDelete = async (id) => {
    try {
      await axios.delete(https://jsonplaceholder.typicode.com/posts/${id});
      setPosts(posts.filter((post) => post.id !== id)); // Remove post from the list
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>

      {/* Create New Post */}
      <div>
        <h2>Create Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button onClick={handleCreate}>Add Post</button>
      </div>

      {/* List of Posts */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {editPost && editPost.id === post.id ? (
              <div>
                <input
                  type="text"
                  value={editPost.title}
                  onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                />
                <textarea
                  value={editPost.body}
                  onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
                />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => setEditPost(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => handleEdit(post)}>Edit</button>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


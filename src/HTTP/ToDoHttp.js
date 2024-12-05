import React, { useEffect, useState } from "react";
import axios from "axios";

const ToDoHttp = () => {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewTodo] = useState({ name: "" });
  const [editTodo, setEditTodo] = useState(null);
  const [editValue, setEditValue] = useState("");

  const API = "https://jsonplaceholder.typicode.com/users";

  // Fetch todos using Axios
  const fetchReq = async () => {
    try {
      const res = await axios.get(API);
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Add a todo using Axios
  const addtodo = async () => {
    try {
      const res = await axios.post(API, {
        name: newtodo.name,
      });
      setTodos((prevTodo) => [...prevTodo, res.data]);
      setNewTodo({ name: "" });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete a todo using Axios
  const deletetodo = async (postid) => {
    try {
      await axios.delete(`${API}/${postid}`);
      setTodos(todos.filter((todo) => todo.id !== postid));
    } catch (err) {
      console.error(err);
    }
  };

  // Update a todo using Axios
  const updateTodo = async (id) => {
    try {
      const res = await axios.put(`${API}/${id}`, {
        name: editValue,
      });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, name: res.data.name } : todo
        )
      );
      setEditTodo(null);
      setEditValue("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReq();
  }, []);

  return (
    <div className="flex-col">
      {/* Add New Todo */}
      <div>
        <input
          type="text"
          value={newtodo.name}
          onChange={(e) => setNewTodo({ ...newtodo, name: e.target.value })}
        />
        <button onClick={addtodo}>Add todo</button>
      </div>

      {/* List Todos */}
      {todos.map((todo, index) => (
        <li key={index}>
          {/* Show input if editing */}
          {editTodo === todo.id ? (
            <div>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => updateTodo(todo.id)}>Save</button>
              <button onClick={() => setEditTodo(null)}>Cancel</button>
            </div>
          ) : (
            <p>
              {todo.name}
              <button
                onClick={() => setEditTodo(todo.id) || setEditValue(todo.name)}
                className="btn btn-success"
              >
                Edit
              </button>
              <button onClick={() => deletetodo(todo.id)}>Remove</button>
            </p>
          )}
        </li>
      ))}
    </div>
  );
};

export default ToDoHttp;

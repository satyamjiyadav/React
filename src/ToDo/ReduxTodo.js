import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo, updatetodo } from "./Store";

const ReduxTodo = () => {
  const [todo, setTodo] = useState("");
  const [currTask, setCurrTask] = useState(null);

  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handeldelete = (index) => {
    dispatch(removetodo(index));
  };

  const handelSubmit = () => {
    if (currTask !== null) {
      dispatch(updatetodo(currTask, todo));
      setCurrTask(null);
    } else {
      dispatch(addtodo(todo));
    }
    return setTodo("");
  };

  const handleEdit = (id) => {
    setTodo(todos[id]);
    setCurrTask(id);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your todo"
      />
      <button onClick={handelSubmit}>
        {currTask !== null ? "update todo" : "add Todo"}
      </button>
      <div>
        {todos.map((tod, index) => (
          <div
            key={index}
            style={{
              border: "10px solid black",
              margin: "50px",
              padding: "20px",
            }}
          >
            <p>{tod}</p>
            <button onClick={() => handleEdit(index)}>Update</button>
            <button onClick={() => handeldelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduxTodo;

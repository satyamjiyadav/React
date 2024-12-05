import React, { useState } from "react";

function UseArray() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Function to handle adding items
  const addItem = (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (inputValue.trim() !== "") {
      setItems([...items, { id: items.length, value: inputValue }]);
      setInputValue(""); // Clear the input field after adding
    }
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseArray;

import React, { useState } from 'react';

function AddNumbers() {
  const [num1, setNum1] = useState(0); 
  const [num2, setNum2] = useState(0); 
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2)); 
  };

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button
        onClick={handleAddition}
      >
        Add
      </button>
      <div>
        {result !== null && (
          <h3>
            Addition: <span>{result}</span>
          </h3>
        )}
      </div>
    </div>
  );
}

export default AddNumbers;

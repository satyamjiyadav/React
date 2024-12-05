import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    // Setting the interval on component mount
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    // Cleaning up the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const stopTimer = () => {
    clearInterval(intervalRef.current);  // Stops the timer
    intervalRef.current = null;  // Setting the ref to null to prevent it from being accessed accidentally
  };

  return (
    <div>
      <h1>Hook Timer - {timer}</h1>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default HookTimer;

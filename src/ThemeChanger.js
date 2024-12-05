import React, { useState, useEffect } from "react";
// import "./App.css";

function ThemeChanger() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Effect to apply theme to the entire page
  useEffect(() => {
    // Set background and text color for the entire page
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
    document.body.style.color = theme === "light" ? "black" : "white";
  }, [theme]);

  return (
    <div>
      <header>
        <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </header>
    </div>
  );
}

export default ThemeChanger;

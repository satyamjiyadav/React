import logo from "./logo.svg";
import "./App.css";
import { useState, use } from "react";
import React from "react";

import Test from "./Test";

import {
  BrowserRouter as Router, 
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./Routing/Home";
import About from "./Routing/About";
import ContactUs from "./Routing/ContactUs";
import PageNotFound from "./Routing/PageNotFound";

import ReduxTodo from "./ToDo/ReduxTodo";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/ContactUs">ContactUs</Link>
        </nav>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" exact={true} element={<About />} />
          <Route path="/ContactUs" exact={true} element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      {/* <ReduxTodo /> */}
    </div>
  );
}

export default App;

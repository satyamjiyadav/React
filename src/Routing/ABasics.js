import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function ABasics() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/Routing/home">Home</Link>
          <br />
          <Link to="/Routing/about">About</Link>
        </nav>
        <Switch>
          <Route exact path="/Routing/home" component={Home} />
          <Route exact path="/Routing/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is my Home Page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my About Page</p>
    </div>
  );
}

export default ABasics;

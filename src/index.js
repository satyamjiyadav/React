import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import User from './User';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Switch, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './ToDo/Store';
import { Store1 } from './CountRedux/Store';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // {/* yaha App ki jagah users kr do */}
    <Provider store={Store}>
      < App/>
    </Provider>
    // {/* <h1>Satyam badshah</h1> */}
  // </React.StrictMode>

  // <Provider store={Store1}>
  //   <App />
  // </Provider>



);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

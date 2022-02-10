import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Login from './pages/Login';
import Index from './pages/Index';
import Main from './pages/main/Main';
import reportWebVitals from './reportWebVitals';
import Baidu from './pages/baidu/Baidu';
import Login from './pages/Login.js'

ReactDOM.render(
  <React.StrictMode>
    <Main />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

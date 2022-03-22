import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import reportWebVitals from './reportWebVitals';
import App_reducetest from './App_reducetest';
import App_reducertest from './App_reducertest';
import App_reducer_20220323 from './App_reducer_20220323';

ReactDOM.render(
  <React.StrictMode>
    <App_reducer_20220323 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

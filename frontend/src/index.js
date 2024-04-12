import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing any global styles
import App from './App'; // Importing the root component of the application
import reportWebVitals from './reportWebVitals'; // Importing web vitals reporting (optional)
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing (if used)

// Rendering the root component of the application into the DOM
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') // Mounting point in the HTML file
);

// Optional: If you want to measure performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

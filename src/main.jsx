import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import SmoothScroll from './SmoothScroll.jsx'; // Import SmoothScroll

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScroll /> 
    <App />
  </React.StrictMode>
);
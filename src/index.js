import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // soon to be replaced with styled objects in App.css
import App from './components/App'; // soon to be moved out one directory - remove components from this path
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

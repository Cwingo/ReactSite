import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css'; // Ensure this path matches where your App.css is stored
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

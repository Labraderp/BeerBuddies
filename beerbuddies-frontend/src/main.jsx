import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{router}</React.StrictMode>,
);

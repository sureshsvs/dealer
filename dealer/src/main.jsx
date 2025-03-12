import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import 'aos/dist/aos.css';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <link id="theme-link" rel="stylesheet" href="/src/styles/theme-light.scss" />
    <App />
  </>
)

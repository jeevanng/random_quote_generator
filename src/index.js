import React from 'react';
import ReactDOM from 'react-dom/client';

// Import bootstrap here first so that it does not override style. Order matters
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS 
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import CSS file next
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiProvider from './context/ApiContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ApiProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>

      </BrowserRouter>

    </ApiProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

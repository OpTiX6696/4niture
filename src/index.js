import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

 

// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <BrowserRouter>
    <App tab="home" />
  </BrowserRouter>
);

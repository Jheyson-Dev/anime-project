import React from 'react';
import ReactDOM from 'react-dom/client';
import rutas from './router/routes';
import './index.css';
import { RouterProvider } from 'react-router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={rutas}></RouterProvider>

  // <React.StrictMode>
  //   <RouterProvider router={rutas}></RouterProvider>
  // </React.StrictMode>
);

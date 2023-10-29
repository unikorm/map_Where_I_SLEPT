
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


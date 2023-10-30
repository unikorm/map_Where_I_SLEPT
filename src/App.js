
import './App.css';
import router from './router';

import React from 'react';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;

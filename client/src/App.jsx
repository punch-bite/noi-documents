import { createAppRouter } from './routes/index';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import "./App.css"
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();
  const router = createAppRouter(isAuthenticated);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
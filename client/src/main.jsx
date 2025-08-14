import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from '@contexts/AuthContext';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
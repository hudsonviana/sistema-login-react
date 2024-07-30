import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from '../src/pages/Home';
import Private from '../src/pages/Private';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/AuthProvider.jsx';
import { RequireAuth } from './contexts/Auth/RequireAuth.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/private',
        element: (
          <RequireAuth>
            <Private />
          </RequireAuth>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './components/ErrorPage';

import './index.css';

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/:err', element: <ErrorPage/>},
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
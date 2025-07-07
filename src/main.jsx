import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import ErrorForInvalidImport from './components/ErrorPages/ErrorForInvalidImport.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorForInvalidImport />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'hustling',
        lazy: async () => {
          const { default: Component } = await import('./components/HustleIdeas/Hustling.jsx');
          return { Component };
        },
        errorElement: <ErrorForInvalidImport />,
      },
      {
        path: 'culture',
        lazy: async () => {
          const { default: Component } = await import('./components/Culture/Culture.jsx');
          return { Component };
        },
        errorElement: <ErrorForInvalidImport />,
      },
      {
        path: 'urban-nature',
        lazy: async () => {
          const { default: Component } = await import('./components/UrbanNature/UrbanNature.jsx');
          return { Component };
        },
        loadingElement: <div className="text-white p-8 text-center">Loading...</div>,
        errorElement: <ErrorForInvalidImport />,
      },
      {
        path: 'contact',
        lazy: async () => {
          const { default: Component } = await import('./components/Contact/Contact.jsx');
          return { Component };
        },
        errorElement: <ErrorForInvalidImport />,
      },
      {
        path: 'user/:userid',
        lazy: async () => {
          const { default: Component } = await import('./components/User/User.jsx');
          return { Component };
        },
        errorElement: <ErrorForInvalidImport />,
      },
      {
        path: 'about',
        lazy: async () => {
          const { default: Component } = await import('./components/About/About.jsx');
          return { Component };
        },
        errorElement: <ErrorForInvalidImport />,
      },
      {
        path: 'local-entrepreneurship',
        lazy: async () => {
          const { default: Component } = await import('./components/Categories/subCategoriesDirector/LocalEntrepreneurship.jsx');
          return { Component };
        },
        errorElement: <ErrorForInvalidImport />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
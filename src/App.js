import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Practice from './Practice';
import Ranges from './Ranges';
import { make_blank } from './helpers';



export default function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Practice />
        },
        {
          path: "/ranges",
          element: <Ranges  />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

  

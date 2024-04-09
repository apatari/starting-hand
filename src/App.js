import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Practice from './Practice';
import Ranges from './Ranges';
import { make_blank } from './helpers';



export default function App() {
  const [custom, setCustom] = useState({})

  useEffect(() => {
    fetch('/api/ranges')
    .then(res => res.json())
    .then(data => setCustom(data))
    
    
  }, [])

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
          element: <Ranges custom={custom} setCustom={setCustom} />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

  

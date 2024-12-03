import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import Donar from './components/Donar.jsx'
import About from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/donars',
          element: <Donar/>
        },
        {
          path: '/about',
          element: <About/>
        },
      ]
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Home from './components/Home/Home.jsx'
import Laptops from './components/Laptops/Laptops.jsx'


const route=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path:'/mobiles', Component: Mobiles},
      {path:'/laptops', Component: Laptops},

    ]
  },
  {
    path:'/about',
    element:<div>About Page is Containing</div>,
  },
  {
    path:'app',
    element:<div>This is App </div>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)

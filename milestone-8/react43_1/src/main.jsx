import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptop from './components/Laptops/Laptop.jsx'


const router= createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {index:true, Component: Home },
      {path:"/mobiles", Component: Mobiles},
      {path:"/laptops", Component: Laptop},
    ]
  },
  {
    path:"/about",
    element:<div>About page</div>
  },
  {
    path:"/Blogs",
    element:<div>All My Blogs</div>
  },
  {
    path:"/app",
    Component: App
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './component/Root/Root.jsx'
import Mobiles from './component/Mobiles/Mobiles.jsx'
import Home from './component/Home/Home.jsx'
import Laptop from './component/Laptop/Laptop.jsx'
const route= createBrowserRouter([
  // {path:'/', element:<div>Home page here</div>},
  // {path:'about', element:<div>This is About Path</div>},
  // {path:'contact', element:<div>Contact Page</div>},
  // {path:'service', element:<div>Services page</div>},
  {
    path:"/",
    Component:Root,
    children:[
      {index: true, Component: Home },
      { path: "mobiles", Component: Mobiles  },
      { path: "Laptop", Component: Laptop  },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Home from './components/Home.jsx'
import LogIn from './components/LogIn.jsx'


const router=createBrowserRouter([
{
 path:'/',
 Component:Home
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

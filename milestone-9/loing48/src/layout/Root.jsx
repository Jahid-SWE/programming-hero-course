import React from 'react'
import Home from '../components/Home/Home'
import NavBar from '../components/Navbar/NavBar'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  )
}

export default Root
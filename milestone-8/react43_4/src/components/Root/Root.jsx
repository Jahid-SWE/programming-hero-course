import React from 'react'
import Home from '../Home/Home'
import { Outlet } from 'react-router'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import './Root.css'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <div>
        <Header></Header>
        <div className='root-main'>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root
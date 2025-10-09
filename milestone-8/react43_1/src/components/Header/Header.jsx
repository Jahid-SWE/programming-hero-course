import React from 'react'
import { NavLink,Link } from 'react-router'
import  './Header.css'

const Header = () => {
  return (
    <div >
        <h1>This is a header</h1>
        <NavLink to="/">Home</NavLink >
        <NavLink  to="/mobiles">Mobiles</NavLink >
        <NavLink  to="/laptops">Laptops</NavLink >
    </div>
  )
}

export default Header
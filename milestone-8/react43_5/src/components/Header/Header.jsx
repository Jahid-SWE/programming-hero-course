import React from 'react'
import { NavLink } from 'react-router'
import './Header.css'
const Header = () => {
  return (
    <div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mobiles'>Mobile</NavLink>
            <NavLink to='/laptops'>Laptop</NavLink>
        </nav>
    </div>
  )
}

export default Header
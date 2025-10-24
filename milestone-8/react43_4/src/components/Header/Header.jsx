import React from 'react'
import './Header.css'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div>
        <nav >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/laptop">Laptop</NavLink>
        </nav>
    </div>
  )
}

export default Header
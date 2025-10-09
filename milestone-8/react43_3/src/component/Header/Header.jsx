import React from 'react'
import { NavLink } from 'react-router'
import './Header.css'



const Header = () => {
  return (
    <div>
      <h1>This is Header Section</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/laptop">Laptop</NavLink>
        </nav>
    </div>
  )
}

export default Header
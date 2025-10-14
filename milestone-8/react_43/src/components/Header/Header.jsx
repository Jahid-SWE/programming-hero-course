import React from 'react'
import { NavLink } from 'react-router'
import './Header.css'

const Header = () => {
  return (
    <div>
        <h1>This is Header</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/laptops">Laptops</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/users2">Users2</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to='/comments'>Comments</NavLink>
            <NavLink to='/fcomments'> FComments</NavLink>
        </nav>
    </div>
  )
}

export default Header
import React from 'react'
import { Link, NavLink } from "react-router";

const Mylink = ({ to, className, children }) => {
    return (
        <div>
            <li>
                <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'text-pink-500 bg-sky-400 rounded p-2' : `${className}`} >
                    {children}
                </NavLink>
            </li>
        </div>
    )
}

export default Mylink
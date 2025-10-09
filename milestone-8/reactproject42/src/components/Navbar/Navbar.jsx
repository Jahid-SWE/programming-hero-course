import React, { useState } from 'react'
import Navlinks from './Navlinks'
import { Menu, X } from 'lucide-react';

   const navlinks=[
  {
    "id": 1,
    "path": "/",
    "name": "Home"
  },
  {
    "id": 2,
    "path": "/about",
    "name": "About"
  },
  {
    "id": 3,
    "path": "/services",
    "name": "Services"
  },
  {
    "id": 4,
    "path": "/products",
    "name": "Products"
  },
  {
    "id": 5,
    "path": "/blog",
    "name": "Blog"
  },
  {
    "id": 6,
    "path": "/contact",
    "name": "Contact"
  },
  {
    "id": 7,
    "path": "/faq",
    "name": "FAQ"
  },
  {
    "id": 8,
    "path": "/portfolio",
    "name": "Portfolio"
  },
  {
    "id": 9,
    "path": "/team",
    "name": "Team"
  },
  {
    "id": 10,
    "path": "/careers",
    "name": "Careers"
  }
]

const Navbar = () => {
 const [open, setOpen]= useState(false)
  const links=navlinks.map(route=> <Navlinks key={route.id} route={route}></Navlinks> )
  return (
    <nav  className='flex justify-between mx-10 text-white '>
        <span className='flex ' onClick={()=>setOpen(!open)}>
            {
            open ? 
                <X className='md:hidden'></X> :
                <Menu className='md:hidden'></Menu>
             }
             <ul className={`md:hidden absolute bg-pink-400 duration-1000 top-6
                ${open ? 'left-6 ' : '-left-64 ' }
                `}>
                {links}
             </ul>
            
            <h1 className='ml-5'>MyNavbar</h1>
        </span>
        <ul className='md:flex  hidden'>

        {
           links
        }
            {/* {
            navlinks.map(route=> <li className='mr-15'><a href={route.path}>{route.name}</a></li> )
            } */}
        </ul>
        <button>Signe In</button>
    </nav>
  )
}

export default Navbar
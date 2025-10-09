import React from 'react'

const Nav = () => {
     const navLinks = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/portfolio", name: "Portfolio" },
  { id: 5, path: "/blog", name: "Blog" },
  { id: 6, path: "/contact", name: "Contact" },
  { id: 7, path: "/faq", name: "FAQ" },
  { id: 8, path: "/faq", name: "Montay" },
  {id: 10, path:"/fla", name: "Colabradge"}
 
];

  return (
    <div>
       <ul className='flex'>
          {navLinks.map(route=> <li key={route.id} className='mr-6'><a href={route.path}>{route.name}</a></li>)}
       </ul>
    </div>
  )
}

export default Nav
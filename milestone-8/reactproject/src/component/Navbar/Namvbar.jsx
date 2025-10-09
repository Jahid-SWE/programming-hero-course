import React from 'react'
import Link from './Link';

const Namvbar = () => {
  const navLinks = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/portfolio", name: "Portfolio" },
  { id: 5, path: "/blog", name: "Blog" },
  { id: 6, path: "/contact", name: "Contact" },
  { id: 7, path: "/faq", name: "FAQ" },

];
  return (
    <div>
        <ul className='flex'>
            {
                navLinks.map(route=> <Link key={route.id} route={route}></Link> )
            }
        </ul>
    </div>
  )
}

export default Namvbar
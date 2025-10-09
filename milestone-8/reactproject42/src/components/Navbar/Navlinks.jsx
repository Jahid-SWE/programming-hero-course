import React from 'react'

const Navlinks = ({route}) => {
    // console.log('good')
  return (
    <div>
        {
            <li className=' px-5 lg:mr-10 bg-emerald-400  hover:bg-red-600'>
                <a href={route.path}>{route.name}</a>
            </li>
        }

    </div>
  )
}

export default Navlinks
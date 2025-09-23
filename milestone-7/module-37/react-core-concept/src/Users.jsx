import React, { use } from 'react'
import './App.css'

const Users = ({fetchUsers}) => {
    const users= use(fetchUsers);
    console.log(users)
  return (
    <div className='card'>
        <p>Users :{users.length} </p>
    </div>
  )
}

export default Users
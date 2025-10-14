import React, { use } from 'react'
import User2 from '../User2/User2'

const Users2 = ({usersPromise}) => {
    const users= use(usersPromise)
    // console.log('Users 2 suspense data load',users)
  return (
    <div>
        <h1>User2 Section</h1>
        {
          users.map(user=><User2 key={user.id} user={user}></User2>)
        }
    </div>
  )
}

export default Users2
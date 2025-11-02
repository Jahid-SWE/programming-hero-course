import React, { use } from 'react'

const Users = ({usersPromise}) => {
    const users= use(usersPromise)
    console.log(users)
  return (
    <div>
        <div>
            <h1>Add A New User</h1>
            <form>
                <input type="text" /><br />
                <input type="email" name="" id="" /><br />
                <button type="submit">Add User</button>
            </form>
        </div>
        <div>
            {
                users.map(user=><p>{user.name} {user.email}</p>)
            }
        </div>
    </div>
  )
}

export default Users
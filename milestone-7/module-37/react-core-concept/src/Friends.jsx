import React, { use } from 'react'
import Friend from './Friend'

const Friends = ({friendsPromise}) => {
    console.log(friendsPromise)
const friends = use(friendsPromise)

  return (
    <div className='card'>
        <h1>Friends {friends.length} </h1>
        {
            friends.map(friend=> <Friend key={friend.id} frined={friend}></Friend>)
        }

    </div>
  )
}

export default Friends;
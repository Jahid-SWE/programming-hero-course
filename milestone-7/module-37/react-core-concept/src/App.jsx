// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import BatsMan from './Batsman';
import Bowling from './Bowling';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
import Students from './Students';
// import Posts from './Posts';




// const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())


// async function 

// const fetchFriends= async()=> {
//   const res=await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json()
// }


//Post Api
// const fetchPost= async()=>{
// const res=await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json()
// }

const fetchComment = async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/comments');
  return res.json();
}



function App() {
  // const friendsPromise= fetchFriends();
  // const postPromise= fetchPost();
  const commentPromise = fetchComment();

  function handleClick(){
    alert('I love My Mother');
  }

const handleClickTwo=()=>{
  alert("Click Button two");

  
}

const Add=(num)=>{
  const sum = num+5;
  alert(sum)
}

  return (
    <>
    <div>

      <Suspense fallback={<h4>Commet is loding...</h4>}>
      <Students commentPromise={commentPromise}></Students>

      </Suspense>

      {/* <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUser}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<p>Friend treat ....</p>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Post are Comming Here...</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */}
    
      <Bowling></Bowling>
      <BatsMan></BatsMan>
      <Counter></Counter>


      <h1>This is Event Handler Section</h1>
      <button onClick={handleClick}>Click Me</button>
      <button className='clickbtn' onClick={handleClickTwo}>Click Me 2</button>
      <button onClick={()=>Add(20)}>Click Add Me</button>
    </div>
    </>
  )
}

export default App

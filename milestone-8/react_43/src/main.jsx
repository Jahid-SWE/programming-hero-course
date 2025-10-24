import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Home from './components/Home/Home.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'
import Comments from './components/Comments/Comments.jsx'
import CommentDetails from './components/CommentDetails/CommentDetails.jsx'
import FComments from './components/FComments/FComments.jsx'
import FComponentDetails from './components/FComponentDetails/FComponentDetails.jsx'

const usersPromise= fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
const route=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path:'mobiles', Component: Mobiles},
      {path:'laptops', Component: Laptops},

      {
        path:'users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users,
      },
       {
        path:'users/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UserDetails
      },

      {
        path:'users2',
        element:<Suspense fallback={<span>Loader...</span>}>
            <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>,
      },
      
      {
        path:'posts',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts,
      },

      {
        path:'posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
       
      },
     {
        path:'comments',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/comments'),
        Component:Comments,
     },
     {
       path:'comments/:commentId',
       loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
       Component:CommentDetails,
     },
     {
      path:'fcomments',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/comments'),
      Component:FComments,
     },
     {
      path: 'fcomments/:fCommentId',
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.fCommentId}`),
      Component: FComponentDetails,
     },
    ]
  },
  {
    path:'/about',
    element:<div>About Page is Containing</div>,
  },
  {
    path:'app',
    element:<div>This is App </div>
  },
  {
      path:'*',
      element:<h1>Page Not Found 404</h1>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)

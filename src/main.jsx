import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contract from './component/About/Contract/Contract';
import About from './component/About/About';
import Header from './component/About/Header/Header';
import Home from './component/Home/Home';
import Friends from './component/Friends/Friends';
import FriendsDetails from './component/FriendsDetails/FriendsDetails';
import Posts from './component/Posts/Posts.jsx';
import PostDetails from './component/PostDetails/PostDetails';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },{
//     path: '/contract',
//     element:  <Contract></Contract>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },{
        path: '/contract',
        element: <Contract></Contract>
      },{
        path: 'friend/:friendId',
        element: <FriendsDetails>
        </FriendsDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },{
        path: 'post/:postId',
        element: <PostDetails></PostDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      }
      ,{
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },{
        path: '/pricing',
        element: <Contract></Contract>
      },{
        path: '/friends',
        element: <Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
        
      },{
        path: '*',
        element: <div>404</div>
      }
    ] 
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

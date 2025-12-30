
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './Root.jsx';
import { Component } from 'lucide-react';
import App from './App.jsx';
import Pricing from './components/pricing/Pricing.jsx';
import User from './components/user/User.jsx';
import User2 from './components/user/User2.jsx';
import Users3 from './components/user/Users3.jsx';
import { Suspense } from 'react';
import Userdetails from './components/user/Userdetails.jsx';
let root = document.getElementById('root')
let user = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

let router = createBrowserRouter([
  {
    path: '',
    Component: Root,
    children: [
      {
        index: true,
        Component: App
      },
      {
        path: 'cards',
        Component: Pricing
      },
      {
        path: 'users',
        Component: User
      },
      {
        path: 'user2',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: User2
      },
      {
        path: 'users3',
        element: <Suspense fallback={<h2>Loading...</h2>}>
          <Users3 users={user}></Users3>
        </Suspense>
      },
      {
        path: 'users/:userID',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),


        Component: Userdetails
      }
    ]
  }
])

ReactDOM.createRoot(root).render(
  <RouterProvider router={router}></RouterProvider>
)

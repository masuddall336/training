
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './Root.jsx';
import { Component } from 'lucide-react';
import App from './App.jsx';
import Pricing from './components/pricing/Pricing.jsx';
let root = document.getElementById('root')

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
      }
    ]
  }
])

ReactDOM.createRoot(root).render(
  <RouterProvider router={router}></RouterProvider>
)

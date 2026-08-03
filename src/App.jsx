import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound'
import Blog from './Components/Blog/Blog'
 


let router = createBrowserRouter([
  {path:"" ,element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:"about",element:<About/>},
    {path:"blog",element:<Blog/>},
    {path :"*",element:<NotFound/>},



  ]}
], {
  basename:'/start-react'
}
)


function App() {

  return (
    <>
        <RouterProvider router={router} />

    </>
  )
}

export default App


import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Register from './Auth/Register/Register'
import Login from './Auth/Login/Login'
import Notfound from './components/Notfound/Notfound'


let router =createBrowserRouter([
  { path:"" , element:<Layout/> , children:[
    {path:"home" , element :<Home/>},
    {index:true , element :<Register/>},
    {path:"login" , element :<Login/>},
    {path:"*" , element :<Notfound/>},
    
  ]},


])


function App() {






  return (
    <>
<RouterProvider router={router}></RouterProvider>
    </>
 )}

export default App

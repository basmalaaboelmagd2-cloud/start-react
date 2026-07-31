import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './../Footer/Footer';
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
      <div dir='rtl' className="min-h-screen flex flex-col ">
        <Navbar />
         <main className='flex-1'>
          <Outlet />
          </main>
        

        <Footer />
      </div>
    </>
  )
}

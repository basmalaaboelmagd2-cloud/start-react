import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="bg-black px-8 py-4">
            <div className="flex items-center justify-between">
                <div className="flex flex-col ">
                    <h2 className="text-white text-3xl font-bold">عدسة</h2>
                    <p className="text-orange-500 text-sm">عالم التصوير الفوتوغرافي</p>
                </div>
                <ul className="flex gap-6 border border-[#262626] p-3 rounded-full">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "bg-orange-600 text-white px-5 py-2 rounded-full" : "text-gray-300"}>الرئيسية</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "bg-orange-600 text-white px-5 py-2 rounded-full" : "text-gray-300"}>المدونة</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "bg-orange-600 text-white px-5 py-2 rounded-full" : "text-gray-300"}> من نحن </NavLink>
                    </li>
                </ul>
                <div className="flex items-center gap-6">
                    <i className="fa-solid fa-magnifying-glass text-gray-400 text-xl"></i>
                    <Link to="/blog"className="bg-orange-500 text-white px-8 py-3 rounded-full">
                        ابدأ القراءة
                    </Link>
                </div>
            </div>
        </nav>


    )
}

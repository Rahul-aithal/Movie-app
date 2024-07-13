import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='bg-blue-900 flex text-blue-100 items-center justify-center h-16'>
            <ul className='flex gap-4 items-center m-2'>
                <NavLink to='/' className={({ isActive }) => `p-2 cursor-pointer duration-0 hover:duration-150 hover:text-white font-bold ${isActive ? "text-white " : ""}`} >Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => `p-2 cursor-pointer duration-0 hover:duration-150 hover:text-white font-bold ${isActive ? "text-white " : ""}`} > About</NavLink>
            <NavLink to='/contact' className={({ isActive }) => `p-2 cursor-pointer duration-0 hover:duration-150 hover:text-white font-bold ${isActive ? "text-white " : ""}`} > Contact</NavLink>
            </ul >
        </nav >
    )
}

export default Navbar
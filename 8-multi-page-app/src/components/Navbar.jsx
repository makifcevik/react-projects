import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeButton from './ThemeButton'

function Navbar() {
  return (
    <nav className='bg-blue-800 text-white p-4 flex justify-between'>
        <h1 className='text-2xl font-bold'>MultiPage</h1>
        <div className='space-x-6'>
            <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-500" : "text-white"}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-yellow-500" : "text-white"}>About</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? "text-yellow-500" : "text-white"}>Blog</NavLink>
            <ThemeButton/>
        </div>
    </nav>
  )
}

export default Navbar

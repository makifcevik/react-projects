import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet/> {/* This is where child routes will be rendered */}
        </>
    )
}

export default Layout

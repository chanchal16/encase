import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../public/logo.svg'

export const Navbar = () => {
  return (
    <nav className="bg-zinc-800 text-gray-300 w-full">
        <div className="flex justify-between items-center container mx-auto px-4 py-2">
            <NavLink to="/">
                <img src={logo} className='w-6 h-6'/>
            </NavLink>
            <ul className="flex items-center gap-4">
                <li className='hover:text-teal-100 hover:underline'>
                    <NavLink to={'/'} className={({isActive})=>'nav-link ' + (isActive?'text-teal-300 ':'')}>
                        Home
                    </NavLink>
                </li>
                <li className='hover:text-teal-100 hover:underline'>
                    <NavLink to={'/about'} className={({isActive})=>'nav-link ' + (isActive?'text-teal-300':'')}>
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

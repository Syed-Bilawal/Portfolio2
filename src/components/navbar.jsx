import React, { useState } from 'react'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <nav className='fixed w-full h-20 flex justify-between items-center px-6 bg-black/95 backdrop-blur-sm text-white z-50 border-b border-gray-800'>
            <div className='flex items-center'>
                <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-xl'>
                    SB
                </div>
            </div>

            <ul className='hidden md:flex space-x-8'>
                {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
                    <li key={item}>
                        <Link 
                            to={item} 
                            smooth={true} 
                            duration={500}
                            className='hover:text-purple-400 transition-colors duration-300 capitalize font-medium cursor-pointer'
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className='md:hidden z-10' onClick={handleNav}>
                {!nav ? <FaBars className='text-2xl' /> : <FaTimes className='text-2xl' />}
            </div>

            {nav && (
                <ul className='absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center space-y-8'>
                    {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
                        <li key={item}>
                            <Link 
                                to={item} 
                                smooth={true} 
                                duration={500}
                                onClick={handleNav}
                                className='text-4xl hover:text-purple-400 transition-colors duration-300 capitalize cursor-pointer'
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

           
        </nav>
    )
}

export default Navbar
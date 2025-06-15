import React, { useState } from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import logo from "../images/logo2.avif"
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handlenav=()=>setNav(!nav)
  return (

    <nav className='fixed w-full h-[80px] flex justify-between items-center  bg-black text-gray-300'>
        <div >
<img src={logo} alt='Logo Image' style={{ width: '100px' ,height:'80px' }}/>
        </div>
{/* menu */}

<ul className='hidden md:flex   '>
    <li className='md:px-3' >
      <Link to='home' smooth={true} duration={500}>
      Home
      </Link>
    </li>
    <li className='md:px-3'>
      <Link to='about' smooth={true} duration={500}>
      About
      </Link>
    </li>
    <li className='md:px-3'>
      <Link to='skills' smooth={true} duration={500}>
      Skills
      </Link>
    </li>
    <li className='md:px-3'>
      <Link to='work' smooth={true} duration={500}>
      Work
      </Link>
    </li>
    <li className='md:px-3'>
      <Link to='contact' smooth={true} duration={500}>
      Contact
      </Link>
    </li>
</ul>
<div  className='sm:hidden z-10 px-3' onClick={handlenav} >
{!nav ? <FaBars /> : <FaTimes />}

</div>
{/* mobile menu */}

<ul className={!nav? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-between items-center}absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-between items-center'}>
<li className='text-4xl py-6'><Link onClick={handlenav} smooth={true} duration={500} to='home'>Home</Link></li>
    <li className='text-4xl py-6'><Link onClick={handlenav} smooth={true} duration={500} to='about'>About</Link></li>
    <li className='text-4xl py-6'><Link onClick={handlenav} smooth={true} duration={500} to="skills">Skills</Link></li>
    <li className='text-4xl py-6'><Link onClick={handlenav} smooth={true} duration={500} to="work">Work</Link></li>
    <li className='text-4xl py-6'><Link onClick={handlenav} smooth={true} duration={500} to="contact">Contact</Link></li>
</ul>
{/* social Icons */}
<div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
      <a href="https://linkedin.com/in/syed-shah-bilawal-a06206264" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
 Linkedin<FaLinkedin size={30}/>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
      <a href="https://github.com/https://www.linkedin.com/in/syed-shah-bilawal-a06206264" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
 Github<FaGithub size={30}/>
      </a>
    </li>
 
  </ul>

</div>
    </nav>
  )
}

export default Navbar
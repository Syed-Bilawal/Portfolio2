import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>To contact me send me email at shahb7599@gmail.com or call me at +92 3066553637</p>
            </div>
        <div className='mx-auto'>
        <ul className='flex  justify-center  '>
    <li className='w-[160px] h-[60px] flex justify-between items-center bg-blue-600 mb-4 '>
      <a href="https://linkedin.com/in/syed-shah-bilawal-a06206264" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
 Linkedin<FaLinkedin size={30}/>
      </a>
    </li>
    <li className='w-[160px] h-[60px] mx-4 flex justify-between items-center  bg-[#333333] mb-4'>
      <a href="https://github.com/https://www.linkedin.com/in/syed-shah-bilawal-a06206264" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
 Github<FaGithub size={30}/>
      </a>
    </li>
   
  </ul>
        </div>
        </form>
    </div>
  )
}

export default Contact
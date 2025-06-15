import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black'>
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-pink-600'>Hi,my name is</p>
<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
  Syed Shah Bilawal
</h1>
<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Flutter Developer</h2>
<p className='text-[#8892b0] py-4 max-w-[700px]'>
  I am a passionate Flutter developer with 2 years of hands-on experience, specializing in developing cross-platform mobile applications. Currently I'm focused on creating user-friendly mobile apps using Flutter and Dart.
</p>
<div className='sm:flex '>
<Link to='work'>
<div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
           
           View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
        </Link>
        <Link to='resume'>
<div>
          <button className='sm:mx-4 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
           
           Resume 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
        </Link>
   
        
</div>

</div>

        
    </div>
  )
}

export default Home
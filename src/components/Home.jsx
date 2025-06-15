import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black'>
            <div className='max-w-6xl mx-auto px-8 flex flex-col justify-center h-full'>
                <div className='space-y-6'>
                    <p className='text-purple-400 text-lg font-medium'>Hi, my name is</p>
                    <h1 className='text-5xl sm:text-7xl font-bold text-white leading-tight'>
                        Syed Shah <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Bilawal</span>
                    </h1>
                    <h2 className='text-3xl sm:text-6xl font-bold text-gray-400'>Flutter Developer</h2>
                    <p className='text-gray-300 py-4 max-w-3xl text-lg leading-relaxed'>
                        I am a passionate Flutter developer with 2 years of hands-on experience, specializing in developing cross-platform mobile applications. Currently I'm focused on creating user-friendly mobile apps using Flutter and Dart.
                    </p>
                    
                    <div className='flex flex-wrap gap-4 pt-6'>
                        <Link to='work' smooth={true} duration={500}>
                            <button className='group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-medium flex items-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25'>
                                View Work
                                <HiArrowNarrowRight className='ml-3 group-hover:translate-x-2 transition-transform duration-300' />
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
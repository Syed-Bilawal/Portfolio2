import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <div name='contact' className='w-full py-20 bg-gradient-to-br from-gray-900 to-black'>
            <div className='max-w-6xl mx-auto px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white mb-4'>
                        Get In <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Touch</span>
                    </h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4'></div>
                    <p className='text-xl text-gray-400'>Let's work together on your next project</p>
                </div>

                <div className='grid lg:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <div className='bg-black p-8 rounded-2xl border border-gray-800'>
                            <h3 className='text-2xl font-bold text-white mb-6'>Contact Information</h3>
                            
                            <div className='space-y-6'>
                                <div className='flex items-center gap-4'>
                                    <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                                        <FaEnvelope className='text-white' />
                                    </div>
                                    <div>
                                        <p className='text-gray-400'>Email</p>
                                        <p className='text-white font-medium'>shahb7599@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className='flex items-center gap-4'>
                                    <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                                        <FaPhone className='text-white' />
                                    </div>
                                    <div>
                                        <p className='text-gray-400'>Phone</p>
                                        <p className='text-white font-medium'>+92 3066553637</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                         
                            <a 
                                href="https://github.com/Syed-Bilawal" 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className='flex-1 bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-xl flex items-center justify-center gap-3 font-medium transition-all duration-300 hover:scale-105'
                            >
                                <FaGithub className='text-2xl' />
                                GitHub
                            </a>
                        </div>
                    </div>

                  
                </div>
            </div>
        </div>
    )
}

export default Contact
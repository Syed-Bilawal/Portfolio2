import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full py-20 bg-black text-gray-300'>
            <div className='max-w-6xl mx-auto px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white mb-4'>
                        About <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Me</span>
                    </h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto'></div>
                </div>

                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-3xl font-bold text-white'>
                            Hi, I'm Syed Shah Bilawal
                        </h3>
                        <p className='text-lg leading-relaxed text-gray-300'>
                            Passionate Flutter developer with 2 years of hands-on experience. I create user-friendly Mobile apps by blending design finesse with Flutter and Dart expertise.
                        </p>
                        <p className='text-lg leading-relaxed text-gray-300'>
                            I thrive in collaborative, dynamic environments, dedicated to delivering innovative solutions. Let's collaborate and build something exceptional together.
                        </p>
                        
                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            <div className='text-center p-6 bg-gray-900 rounded-lg border border-gray-800'>
                                <h4 className='text-3xl font-bold text-purple-400'>2+</h4>
                                <p className='text-gray-400'>Years Experience</p>
                            </div>
                            <div className='text-center p-6 bg-gray-900 rounded-lg border border-gray-800'>
                                <h4 className='text-3xl font-bold text-purple-400'>10+</h4>
                                <p className='text-gray-400'>Projects Completed</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='w-80 h-80 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse'></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='w-72 h-72 bg-gray-800 rounded-full border-4 border-purple-500 flex items-center justify-center'>
                                <span className='text-6xl font-bold text-purple-400'>SB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
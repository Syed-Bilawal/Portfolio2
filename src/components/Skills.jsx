import React from 'react'

const Skills = () => {
    const skills = [
        { name: 'Flutter', level: 90 },
        { name: 'Dart', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'API Integration', level: 80 },
        { name: 'GetX', level: 75 },
        { name: 'GitHub', level: 85 }
    ]

    return (
        <div className='bg-gray-900 w-full py-20 text-gray-300' name="skills">
            <div className='max-w-6xl mx-auto px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white mb-4'>
                        My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Skills</span>
                    </h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4'></div>
                    <p className='text-xl text-gray-400'>Technologies I've worked with</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {skills.map((skill, index) => (
                        <div key={index} className='bg-black p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300 group hover:transform hover:scale-105'>
                            <div className='text-center mb-6'>
                                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300'>
                                    {skill.name}
                                </h3>
                                <div className='w-full bg-gray-700 rounded-full h-3 mb-2'>
                                    <div 
                                        className='bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out'
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <span className='text-purple-400 font-semibold'>{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
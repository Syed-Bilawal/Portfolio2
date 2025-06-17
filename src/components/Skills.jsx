import React from 'react'

const Skills = () => {
    const skills = [
        { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Dart', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'API Integration', img: require('../images/API Integration.png')},
        { name: 'GetX', img: require('../images/Get X8.png') },
        { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Bloc', img: require('../images/Block PNG_1-8.png') },
        { name: 'Microsoft', img: require('../images/Microsoft.png') }
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
                        <div key={index} className='rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300 group hover:transform hover:scale-105 flex flex-col items-center'>
                            <img
                                src={skill.img}
                                alt={skill.name + ' logo'}
                                className='w-20 h-20 object-contain mb-4 rounded-lg shadow-md'
                                onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/80?text=No+Image'; }}
                            />
                            <h3 className='text-2xl font-bold text-white mb-0 group-hover:text-purple-400 transition-colors duration-300'>
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
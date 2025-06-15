import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { data } from "../data/data"

const Work = () => {
    return (
        <div className="bg-black w-full py-20 text-gray-200" name="work">
            <div className="max-w-6xl mx-auto px-8">
                <div className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white mb-4'>
                        My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Work</span>
                    </h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4'></div>
                    <p className='text-xl text-gray-400'>Check out my latest projects</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {data.map((project) => (
                        <div key={project.id} className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-6xl text-purple-400 opacity-50">📱</div>
                                )}
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 mb-4 text-lg">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.split(', ').map((tech, index) => (
                                        <span key={index} className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-4">
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </a>
                                    {project.github && project.github !== "#" && (
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                                        >
                                            <FaGithub />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
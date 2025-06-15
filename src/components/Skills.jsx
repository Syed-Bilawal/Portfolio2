import React from 'react'
import css from "../images/css.png"
import github from "../images/github.png"
import react from "../images/react.png"
import tailwind from "../images/tailwind.png"
import javascript from "../images/javascript.png"
import html from "../images/html.png"

// Note: You'll need to add Flutter, Dart, Firebase icons to your images folder
// For now, I'm using the existing images, but you should add appropriate icons

const Skills = () => {
  return (
    <div className='bg-black h-screen w-full text-gray-300' name="skills">
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div>
    <p  className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
    <p className='py-4'>These are the technologies I've worked with</p>
</div>
<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6 '>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
     
        <p className='my-4'>Flutter</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
  
        <p className='my-4'>Dart</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
 
        <p className='my-4'>Firebase</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    
        <p className='my-4'>API Integration</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

        <p className='my-4'>GetX</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      
        <p className='my-4'>Github</p>
    </div>
</div>
</div>
    </div>
  )
}

export default Skills
import React from 'react'

const About = () => {
  return (
   <div name="about" className='h-screen bg-black text-gray-500 w-full'>
<div className='flex flex-col items-center justify-center w-full h-full px-2'>
    <div className='max-w-[1000px] grid grid-cols-2 gap-8 w-full'>
    <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div>
            
          </div>

    </div>
    <div className='grid sm:grid-cols-2  gap-8 px-4'>
    <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Syed Shah Bilawal, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Passionate Flutter developer with 2 years of hands-on experience. I create user-friendly Mobile apps by blending design finesse with Flutter and Dart expertise. I thrive in Collaborative, dynamic environments, dedicated to delivering innovative solutions. Let's Collaborate and build something exceptional together.</p>  
            </div>

    </div>

</div>
   </div>
  )
}

export default About
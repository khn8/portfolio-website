import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Java from '../assets/java.png';
import C from '../assets/c.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-5/6  text-[#a7e1a1] bg-[#241f21]'>
        {/* <div className='flex flex-col justify-center rounded-3xl w-4/6 h-5/7 px-3 ml-60 bg-[#91a9ec] text-[#000000] sm:mr-2'> */}
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
                <div>
                    <p className='text-4xl font-bold inline  text-[#a7e1a1]'>Skills</p>
                    <p className='py-4'>These are the technologies I have experience in</p>
                </div>

                {/* <div className='w-full grid grid-cols-3 text-xl text-[#F6F8F6] py-0 sm:grid-col-4 gap-4 text-center'>
                    <div>Proficient</div>
                    <div>Familiar</div>
                    <div>Proficient</div>
                </div> */}
                {/* Icons Container */}
                <div className='w-full grid grid-cols-2  sm:grid-cols-4 gap-4 text-center py-8'>
                    
                    <div className='shadow-none hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-none shadow-[#0000009e] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-none shadow-[#0000009e] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-none shadow-[#0000009e] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-none shadow-[#0000009e] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                        <p className='my-4'>Java</p>
                    </div>
                    <div className='shadow-none shadow-[#0000009e] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={C} alt="C icon" />
                        <p className='my-4'>C</p>
                    </div>
                    <div className='shadow-none shadow-[#0000009e] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-none shadow-[#0000009e] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                        <p className='my-4'>Github</p>
                    </div>
                </div>
            </div>
        {/* </div>     */}
    </div>
  )
}

export default Skills
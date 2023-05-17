import React from 'react'

const About = () => { 
  return (
    <div name='about' className='w-full h-full sm:h-96 bg-gradient-to-tr from-[#98FF99] to-[#62D28F]  text-[#000000]'>
        {/* <div className='flex flex-col justify-center -skew-y-12 z-0 w-full h-80 px-3 bg-[#9ccf97] text-[#000000] sm:mr-2 -py-60'>
        </div> */}
            <div className='flex flex-col justify-center items-center w-full h-full z-10'>
                <div className='max-w-[1000px] w-full grid grid-cols-0 gap-8 px-4'>
                    <div className='sm:text-center pb-8 pl-4'>
                        <p className='text-4xl font-bold inline text-[#000000]'>
                            ABOUT
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Khang. Welcome!</p>
                    </div>
                    <div>
                        <p>
                            I'm currently a senior in Computer Science 
                            at the University of Pittsburgh.
                            <br />
                            <br />
                            Throughout my experience in the field, I have taken an interest in Web Development, especially in Front-end Development and UI/UX Design. 
                            <br />
                            <br />
                            In my free time, I usually play games, play my instruments, or learn cooking recipes.
                        </p>
                    </div>
                    
                </div>
            </div>
        
    </div>
  )
}

export default About
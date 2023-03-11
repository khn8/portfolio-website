import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-80  bg-gradient-to-tr from-[#a7e1a1] to-[#74d36c]  text-[#000000]'>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur numquam, pariatur optio atque unde? Magnam voluptas asperiores, neque sapiente quibusdam vero corporis, nemo cumque, necessitatibus commodi sequi beatae assumenda.
                        </p>
                    </div>
                    
                </div>
            </div>
        
    </div>
  )
}

export default About
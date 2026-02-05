import React from 'react'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#1a1a1a] text-white py-20 px-8 md:px-16 relative'>
        {/* Circular Badge - Top Right */}
        <div className='absolute top-8 right-8 md:top-16 md:right-16'>
            <div className='relative w-32 h-32 md:w-40 md:h-40'>
                {/* Circular text */}
                <svg viewBox='0 0 100 100' className='w-full h-full animate-spin-slow text-[#49a54b]'>
                    <path id='circlePath' d='M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0' fill='none' />
                    <text className='text-[8px] fill-current tracking-wider uppercase'>
                        <textPath href='#circlePath' startOffset='0%'>
                            WEB DEVELOPER • FRONTEND •
                        </textPath>
                    </text>
                </svg>
                {/* Center star/diamond */}
                <div className='absolute inset-0 flex items-center justify-center'>
                    <svg className='w-8 h-8 md:w-10 md:h-10 text-[#49a54b]' viewBox='0 0 24 24' fill='currentColor'>
                        <path d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' />
                    </svg>
                </div>
            </div>
        </div>

        <div className='max-w-[1400px] mx-auto pt-16 md:pt-24'>
            {/* Large Gothic-style Name */}
            <h1 className='text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] mb-12 text-white' style={{fontFamily: 'Georgia, serif', letterSpacing: '-0.02em'}}>
                Ian<br/>Nguyen
            </h1>
            
            {/* Decorative asterisk */}
            <div className='mb-8'>
                <svg className='w-8 h-8 text-[#49a54b]' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M12 2L9 9L2 12L9 15L12 22L15 15L22 12L15 9L12 2Z' />
                </svg>
            </div>
            
            {/* Introduction paragraph */}
            <div className='max-w-[800px]'>
                <p className='text-lg md:text-xl leading-relaxed text-gray-300 mb-2'>
                    Hello and welcome to my digital portfolio. I'm a passionate full-stack web developer dedicated to building engaging web experiences. Explore my projects to see my capabilities. If you're interested in collaborating, or have any questions, feel free to{' '}
                    <Link 
                        to="contact" 
                        smooth={true} 
                        offset={-50} 
                        duration={500}
                        className='font-bold underline cursor-pointer text-[#49a54b] hover:text-[#5bc95d] transition-colors'
                    >
                        reach out here
                    </Link>!
                </p>
            </div>
        </div>

    </div>
  )
}

export default Home
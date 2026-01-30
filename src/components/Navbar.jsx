import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 md:px-16 bg-black text-white z-50 shadow-lg'>
        {/* Left Side - Name and Title (Inline) */}
        <div className='flex items-center gap-4'>
            <h1 className='text-xl md:text-2xl font-bold tracking-tight'>Ian Nguyen</h1>
            <span className='hidden md:block text-gray-400'>|</span>
            <p className='hidden md:block text-xs md:text-sm text-gray-400 tracking-wide uppercase'>Developer, UX Designer</p>
        </div>

        {/* Right Side - Navigation Links */}
        <nav>
            <ul className='flex gap-6 md:gap-8 text-xs md:text-sm'>
                <li>
                    <Link 
                        to="home" 
                        smooth={true} 
                        duration={500} 
                        className='cursor-pointer hover:text-[#49a54b] transition-colors duration-300'
                    >
                        home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="about" 
                        smooth={true} 
                        offset={-220} 
                        duration={500} 
                        className='cursor-pointer hover:text-[#49a54b] transition-colors duration-300'
                    >
                        about
                    </Link>
                </li>
                <li>
                    <Link 
                        to="experience" 
                        smooth={true} 
                        offset={-80} 
                        duration={500} 
                        className='cursor-pointer hover:text-[#49a54b] transition-colors duration-300'
                    >
                        experience
                    </Link>
                </li>
                <li>
                    <Link 
                        to="skills" 
                        smooth={true} 
                        offset={-150} 
                        duration={500} 
                        className='cursor-pointer hover:text-[#49a54b] transition-colors duration-300'
                    >
                        skills
                    </Link>
                </li>
                <li>
                    <Link 
                        to="work" 
                        smooth={true} 
                        duration={500} 
                        className='cursor-pointer hover:text-[#49a54b] transition-colors duration-300'
                    >
                        projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="contact" 
                        smooth={true} 
                        offset={-50} 
                        duration={500} 
                        className='cursor-pointer hover:text-[#49a54b] transition-colors duration-300'
                    >
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

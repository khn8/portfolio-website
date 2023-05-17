import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => 
    {   
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-[#e0d6ad]'>
        <div>
            <img src={Logo} alt="Logo Image" style ={{width: '100px'}} />
        </div>
    
        {/* menu */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={-220} duration={500}>
                    About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} offset={-150} duration={500}>
                    Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                    Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={-50} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>
        </div>


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
            
        

        {/* Mobile Menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
            <ul>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                    </Link>    
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} offset={-220} duration={500}>
                    About
                    </Link> 
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} offset={-80} duration={500}>
                    Skills
                    </Link> 
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} offset={-78} duration={500}>
                    Work
                    </Link> 
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} offset={-80} duration={500}>
                    Contact
                    </Link> 
                </li>
            </ul>
        </div>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul className={nav ? 'text-[#1A120B]' : 'text-[#eff2ef]'}>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300'>
                    <a className='flex justify-between items-center w-full'
                    href="https://www.linkedin.com/in/khang-buu-nguyen/" target="_blank">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300'>
                    <a className='flex justify-between items-center w-full'
                    href="https://github.com/khn8" target="_blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300'>
                    <a className='flex justify-between items-center w-full'
                    href="mailto:khangbuu187@gmail.com" target="_blank">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300'>
                    <a className='flex justify-between items-center w-full'
                    href="https://drive.google.com/file/d/1GvcAnWNU_5eA6-aSL0E2XpSj9BNPXbG1/view" target="_blank">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>



    </div>


        
  )
}

export default Navbar
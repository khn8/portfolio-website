import React from 'react'
import useCollapse from 'react-collapsed'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'


const Contact = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
   
  return (
    <div id='contact' name='contact' className='w-full h-60 bg-[#e0d6ad] text-[#232122] flex flex-col justify-center items-center text-center p-4'>
      <div className='info'>
        <div>
            

            <div className='flex flex-col items-center'>
              <p>
                Designed and Built by <br />
                Khang Buu Nguyen  <br /> <br />
                (+1)813-400-5495 <br />
                
              </p>

              <div className='flex flex-row items-center space-x-4 '>
                <a className='flex justify-between items-center w-full'
                href="https://www.linkedin.com/in/khang-buu-nguyen/" target="_blank">
                    <FaLinkedin size={30}/>
                </a>

                <a className='flex justify-between items-center w-full'
                href="https://github.com/khn8" target="_blank">
                    <FaGithub size={30}/>
                </a>

                <a className='flex justify-between items-center w-full'
                href="mailto:khangbuu187@gmail.com" target="_blank">
                    <HiOutlineMail size={30}/>
                </a>

                <a className='flex justify-between items-center w-full'
                href='https://drive.google.com/file/d/1GvcAnWNU_5eA6-aSL0E2XpSj9BNPXbG1/view?usp=sharing'>    
                    <BsFillPersonLinesFill size={30}/>
                </a>
                </div>
            </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Contact
import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div id='contact' name='contact' className='w-full bg-gradient-to-br from-[#f0e6c8] to-[#e0d6ad] text-[#232122] py-16'>
      <div className='max-w-[1000px] mx-auto px-8'>
        {/* Main CTA */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-[#241f21] mb-4'>
            Contact Me
          </h2>
          <p className='text-lg text-gray-700 mb-2'>
            Got a project? Need a developer? Just want to chat about code?
          </p>
          <p className='text-base text-gray-600 mb-8'>
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
          <a 
            href="mailto:khangbuu187@gmail.com"
            className='inline-block px-8 py-4 bg-[#49a54b] text-white font-bold rounded-full hover:bg-[#3d8a3f] transform hover:scale-105 transition-all duration-300 shadow-lg text-lg'
          >
            Send Me a Message
          </a>
        </div>

        {/* Contact Info */}
        <div className='bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-8'>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-[#241f21] mb-4'>Ian Nguyen</h3>
            <p className='text-gray-700 text-lg'>
              <span className='font-semibold text-[#241f21]'>Phone:</span> (+1) 813-400-5495
            </p>
            <p className='text-gray-700 text-lg'>
              <span className='font-semibold text-[#241f21]'>Email:</span> khangbuu187@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div className='flex justify-center items-center gap-6'>
            <a 
              href="https://www.linkedin.com/in/khang-buu-nguyen/" 
              target="_blank" 
              rel="noreferrer"
              className='group flex items-center justify-center w-14 h-14 bg-[#0077b5] rounded-full hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              <FaLinkedin size={28} className='text-white'/>
            </a>

            <a 
              href="https://github.com/khn8" 
              target="_blank" 
              rel="noreferrer"
              className='group flex items-center justify-center w-14 h-14 bg-[#333] rounded-full hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              <FaGithub size={28} className='text-white'/>
            </a>

            <a 
              href="mailto:khangbuu187@gmail.com" 
              target="_blank" 
              rel="noreferrer"
              className='group flex items-center justify-center w-14 h-14 bg-[#ea4335] rounded-full hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl text-white font-bold text-2xl'
              aria-label="Email"
            >
              @
            </a>

            <a 
              href='https://drive.google.com/file/d/1GvcAnWNU_5eA6-aSL0E2XpSj9BNPXbG1/view?usp=sharing'
              target="_blank" 
              rel="noreferrer"
              className='group flex items-center justify-center w-14 h-14 bg-[#49a54b] rounded-full hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              <BsFillPersonLinesFill size={28} className='text-white'/>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center text-gray-600 text-sm'>
          <p className='mb-2'>© 2024 Ian Nguyen. All rights reserved.</p>
          <p>Designed & Built with ❤️ using React and Tailwind CSS</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
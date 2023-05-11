import React from 'react'
import useCollapse from 'react-collapsed'
import {FaTimes} from 'react-icons/fa'


const Contact = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
   
  return (
    <div id='contact' name='contact' className='w-full h-screen bg-[#e0d6ad] text-[#51ae53] flex flex-col justify-center items-center text-center p-4'>
      <div className='info'>
        <div>
            <p>
              (+1)813-400-5495
            </p>
        </div>
      </div>
      
      <div className="header" {...getToggleProps()}>
            {isExpanded ? <FaTimes /> : 'CONTACT ME'}
      </div>
      <div {...getCollapseProps()}>
        <div className="form">
          <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline  text-[#232122]'>Contact</p>
                  <p className='text-[#232122] py-4'>Submit the form below or shoot me an email</p>
              </div>
              <input className='bg-[#232122] text-[#51ae53] placeholder-[#51ae53] shadow-md shadow-[#000000]  p-2 rounded-xl' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#232122] placeholder-[#51ae53] shadow-md shadow-[#000000] rounded-xl' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#232122] text-[#51ae53] placeholder-[#51ae53] shadow-md shadow-[#000000] p-2 rounded-xl' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-xl text-[#49a54b] border-2 rounded-3xl border-[#49a54b] hover:bg-[#49a54b] hover:border-[#49a54b] hover:text-[#232122] px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
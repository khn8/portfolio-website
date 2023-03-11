import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e6d5ad]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#241f21]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl py-4 font-bold text-[#51ae53]'>Khang Nguyen</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#241f21]'>I'm a CS Major</h2>
            <p className='text-[#241f21] py-4 max-w-[700px]'>I'm a senior at the University of Pittsburgh</p>
            <div>
            <button className='text-[#51ae53] border-2 rounded-3xl border-[#51ae53] px-6 py-3 my-2 flex items-center hover:bg-[#51ae53] hover:text-[#1A120B] hover:border-[#51ae53]'>My Work 
              <span>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
            </div>
        </div>

        


    </div>
  )
}

export default Home
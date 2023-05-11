import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Transition from 'react-transition-group'

const Home = () => {
  const [inProp, setInProp] = useState(false);
  // const nodeRef = useRef(null);
    
  return (
    
    
    <div name='home' className='w-full h-screen bg-[#e6d5ad]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#241f21]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl py-4 font-bold text-[#49a54b]'>Khang Nguyen</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#241f21]'>I'm a CS Major</h2>
            <p className='text-[#241f21] py-4 max-w-[700px]'>I'm a senior at the University of Pittsburgh</p>
            <div>
            <Link  to="work" smooth={true} offset={-78} duration={500}>
              <button className='text-xl text-[#49a54b] border-2 rounded-3xl border-[#49a54b] px-6 py-3 my-2 flex items-center hover:bg-[#49a54b] hover:text-[#1A120B] hover:border-[#49a54b]'>
                
                  My Work
                
                <span>
                  <HiArrowNarrowRight className='ml-3'/>
                </span>
              </button>
            </Link>
            </div>
        </div>
    </div>
    
  )
}

export default Home
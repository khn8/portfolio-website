import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
    
  return (
    <div name='work' className='w-full md:h-screen bg-[#5b8a5b]  text-[#dfd1a3] '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline  text-[#dfd1a3] '>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 gap-4">
                
            {/* Grid Item */}
            {project.map((item, index) => (
                <div className='border'>
                    <a href={item.github} target="_blank">
                        <img 
                            src={require('../assets/projects/' +
                            item.image +
                            '.png')} 
                            alt={item.name} 
                        />

                    
                        <div
                            key={index}
                            style={{ backgroundColor: '#63a863' }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
                                    flex justify-center text-center items-center mx-auto content-div "
                        >
                            
                            {/* Hover effect for images */}
                            <div className="text">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                                
                                <div className="pt-8 text-center text-gray-200 px-4 ">
                                    {item.tech}
                                </div>

                                <div className="pt-8 text-center text-white px-4 ">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}


        </div>
            </div>
            </div>
    );
};

export default Work;
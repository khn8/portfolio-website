import React from 'react';
import { Link } from 'react-router-dom';
import { data } from "../data/data.js";

const Work = () => {
  const project = data;
    
  return (
    <div name='work' className='w-full min-h-screen py-20 md:py-32 bg-gradient-to-br from-[#5b8a5b] via-[#4a7a4a] to-[#3d6a3d]'>
      <div className='max-w-[1200px] mx-auto px-8'>
        {/* Header - Matching other sections */}
        <div className='text-center mb-16'>
          <p className='text-5xl font-bold text-white mb-4'>
            Projects
          </p>
          <p className='text-lg text-gray-100'>Things I've built</p>
          <div className='w-24 h-1 bg-white mx-auto mt-4 rounded-full'></div>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {project.map((item, index) => (
            <Link 
              key={index} 
              to={`/project/${item.slug}`}
              className='group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl'
            >
              {/* Project Image */}
              <div className='relative overflow-hidden bg-gray-900'>
                <img 
                  src={require('../assets/projects/' + item.image + '.' + (item.imageExt || 'png'))} 
                  alt={item.name}
                  className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Project Info */}
              <div className='p-6'>
                {/* Project Name */}
                <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-[#98FF99] transition-colors duration-300'>
                  {item.name}
                </h3>
                
                {/* Project Description */}
                <p className='text-gray-100 mb-4 leading-relaxed line-clamp-3'>
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className='mb-4'>
                  <p className='text-xs text-gray-200 font-semibold mb-2 uppercase tracking-wide'>Tech Stack</p>
                  <div className='flex flex-wrap gap-2'>
                    {item.tech.split(',').map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className='px-3 py-1 bg-white/10 text-white text-sm rounded-full font-medium border border-white/20'
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <div className='text-white font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300'>
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Projects Link */}
        <div className='text-center mt-12'>
          <a 
            href="https://github.com/khn8" 
            target="_blank" 
            rel="noreferrer"
            className='inline-block px-8 py-4 bg-white text-[#49a54b] font-bold rounded-full hover:bg-[#98FF99] hover:text-[#241f21] transform hover:scale-105 transition-all duration-300 shadow-lg'
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
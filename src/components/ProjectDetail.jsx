import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../data/data';
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = data.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className='w-full min-h-screen bg-[#e8dcc4] flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-serif text-[#1a1a1a] mb-4'>Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className='text-[#1a1a1a] hover:underline'
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen bg-[#e8dcc4]'>
      {/* Back Button */}
      <div className='max-w-[900px] mx-auto px-8 pt-8'>
        <button 
          onClick={() => navigate('/')}
          className='flex items-center gap-2 text-[#1a1a1a] hover:underline mb-8 font-serif'
        >
          <HiArrowLeft /> Back to Portfolio
        </button>
      </div>

      <div className='max-w-[900px] mx-auto px-8 py-12'>
        {/* Project Header */}
        <div className='mb-12'>
          <h1 className='text-5xl md:text-6xl font-serif text-[#1a1a1a] mb-4' style={{fontFamily: 'Georgia, serif'}}>
            {project.name}
          </h1>
          <p className='text-xl text-[#3a3a3a] mb-2' style={{fontFamily: 'Georgia, serif'}}>
            {project.subtitle}
          </p>
          <p className='text-base text-[#5a5a5a] mb-6'>
            Launched: {project.launchDate}
          </p>
        </div>

        {/* Main Project Image */}
        <div className='mb-12'>
          <div className='bg-[#2a2a2a] border-4 border-[#1a1a1a] overflow-hidden'>
            <img 
              src={require('../assets/projects/' + project.image + '.' + (project.imageExt || 'png'))} 
              alt={project.name}
              className='w-full h-auto object-cover'
            />
          </div>
          <p className='text-sm text-[#5a5a5a] mt-2 italic' style={{fontFamily: 'Georgia, serif'}}>
            {project.name} interface at launch.
          </p>
        </div>

        {/* Background Section */}
        {project.fullDescription?.background && (
          <div className='mb-12'>
            <h2 className='text-3xl font-serif text-[#1a1a1a] mb-4' style={{fontFamily: 'Georgia, serif'}}>
              Background
            </h2>
            <p className='text-lg text-[#2a2a2a] leading-relaxed mb-4' style={{fontFamily: 'Georgia, serif'}}>
              {project.fullDescription.background}
            </p>
          </div>
        )}

        {/* Challenge Section */}
        {project.fullDescription?.challenge && (
          <div className='mb-12'>
            <h2 className='text-3xl font-serif text-[#1a1a1a] mb-4' style={{fontFamily: 'Georgia, serif'}}>
              The Challenge
            </h2>
            <p className='text-lg text-[#2a2a2a] leading-relaxed mb-4' style={{fontFamily: 'Georgia, serif'}}>
              {project.fullDescription.challenge}
            </p>
          </div>
        )}

        {/* Solution Section */}
        {project.fullDescription?.solution && (
          <div className='mb-12'>
            <h2 className='text-3xl font-serif text-[#1a1a1a] mb-4' style={{fontFamily: 'Georgia, serif'}}>
              The Solution
            </h2>
            <p className='text-lg text-[#2a2a2a] leading-relaxed mb-4' style={{fontFamily: 'Georgia, serif'}}>
              {project.fullDescription.solution}
            </p>
          </div>
        )}

        {/* Features Section */}
        {project.fullDescription?.features && (
          <div className='mb-12'>
            <h2 className='text-3xl font-serif text-[#1a1a1a] mb-4' style={{fontFamily: 'Georgia, serif'}}>
              Key Features
            </h2>
            <ul className='space-y-2'>
              {project.fullDescription.features.map((feature, index) => (
                <li 
                  key={index}
                  className='text-lg text-[#2a2a2a] pl-6 relative' 
                  style={{fontFamily: 'Georgia, serif'}}
                >
                  <span className='absolute left-0'>•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical Details */}
        {project.fullDescription?.techDetails && (
          <div className='mb-12'>
            <h2 className='text-3xl font-serif text-[#1a1a1a] mb-4' style={{fontFamily: 'Georgia, serif'}}>
              Technical Implementation
            </h2>
            <ul className='space-y-2'>
              {project.fullDescription.techDetails.map((detail, index) => (
                <li 
                  key={index}
                  className='text-lg text-[#2a2a2a] pl-6 relative' 
                  style={{fontFamily: 'Georgia, serif'}}
                >
                  <span className='absolute left-0'>•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links Section */}
        <div className='border-t-2 border-[#1a1a1a] pt-8 mb-12'>
          <h2 className='text-2xl font-serif text-[#1a1a1a] mb-6' style={{fontFamily: 'Georgia, serif'}}>
            View Project
          </h2>
          <div className='flex flex-wrap gap-4'>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className='inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-[#e8dcc4] font-serif hover:bg-[#3a3a3a] transition-colors'
              >
                View on GitHub
                <HiExternalLink />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className='inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1a1a1a] text-[#1a1a1a] font-serif hover:bg-[#1a1a1a] hover:text-[#e8dcc4] transition-colors'
              >
                View Live Site
                <HiExternalLink />
              </a>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className='border-t-2 border-[#1a1a1a] pt-8 flex justify-between items-center'>
          <button 
            onClick={() => navigate('/')}
            className='text-[#1a1a1a] hover:underline font-serif'
          >
            ← Back to All Projects
          </button>
          <p className='text-sm text-[#5a5a5a]'>{project.launchDate}</p>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t-2 border-[#1a1a1a] mt-20 py-8 bg-[#d8ccb4]'>
        <div className='max-w-[900px] mx-auto px-8 text-center'>
          <p className='text-sm text-[#3a3a3a]' style={{fontFamily: 'Georgia, serif'}}>
            ©2026 Ian Nguyen, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;


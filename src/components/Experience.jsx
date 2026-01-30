import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Rennlabs',
      period: 'June 2025 - August 2025',
      type: 'Full-Time',
      location: 'Remote',
      description: 'Developed the CQ Admin Panel serving over 150 investment firms, implementing features that reduced manual data-entry time by 45%.',
      achievements: [
        'Built responsive UI with TypeScript, React, and Tailwind CSS',
        'Improved page load times by 30% through optimization',
        'Integrated 12 RESTful API endpoints with 99.8% data-sync accuracy',
        'Reduced data-refresh latency from 5s to 2s (60% improvement)'
      ],
      tech: ['TypeScript', 'React', 'Tailwind CSS', 'REST APIs']
    },
    {
      title: 'Software Engineer',
      company: 'HITem Manufacturing',
      period: 'May 2022 - August 2023',
      type: 'Full-Time',
      location: 'On-Site',
      description: 'Redesigned company Intranet and implemented code improvements for better system performance.',
      achievements: [
        'Redesigned Intranet using HTML, JavaScript, and CSS',
        'Improved system performance and reliability',
        'Developed new application features',
        'Conducted comprehensive software testing'
      ],
      tech: ['JavaScript', 'HTML', 'CSS', 'System Design']
    },
    {
      title: 'Video Editor',
      company: 'Zeroz Productions (YeaH1 Group)',
      period: 'August 2020 - September 2020',
      type: 'Contract',
      location: 'Vietnam',
      description: "Vietnam's leading media and technology company - created advertising products and creative storyboards.",
      achievements: [
        'Developed advertising products using Adobe Premiere',
        'Drafted creative storyboards for luxury fashion retailer',
        'Collaborated with creative team on video production'
      ],
      tech: ['Adobe Premiere', 'Video Editing', 'Creative Direction']
    }
  ];

  const education = [
    {
      degree: "Master's of Human Centered Design",
      school: 'Harrisburg University of Science and Technology',
      period: 'Graduated December 2025',
      status: 'Completed',
      focus: 'UI/UX Design, User Research, Design Thinking'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Pittsburgh',
      period: 'Graduated December 2023',
      status: 'Completed',
      focus: 'Computer Science, Minor in Chinese',
      honors: 'University of Pittsburgh Merit Scholarship'
    }
  ];

  return (
    <div name='experience' className='w-full py-20 bg-[#6BC67E]'>
      <div className='max-w-[1200px] mx-auto px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-5xl font-bold text-white mb-4'>
            Experience & Education
          </p>
          <p className='text-lg text-gray-100'>My professional journey and academic background</p>
          <div className='w-24 h-1 bg-white mx-auto mt-4 rounded-full'></div>
        </div>

        {/* Employment Section */}
        <div className='mb-16'>
          <div className='mb-8'>
            <h3 className='text-3xl font-bold text-white'>Employment</h3>
          </div>

          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <div key={index} className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#49a54b]'>
                <div className='mb-4'>
                  <h4 className='text-2xl font-bold text-[#241f21] mb-2'>{exp.title}</h4>
                  <p className='text-xl text-[#49a54b] font-semibold mb-1'>{exp.company}</p>
                  <p className='text-sm text-gray-600'>{exp.period}</p>
                </div>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {exp.tech.map((tech, i) => (
                    <span key={i} className='px-3 py-1 bg-[#49a54b]/10 text-[#49a54b] text-sm rounded-full font-medium'>
                      {tech}
                    </span>
                  ))}
                </div>

                <p className='text-gray-700 mb-4 leading-relaxed'>{exp.description}</p>

                <div>
                  <p className='font-semibold text-[#241f21] mb-2'>Key Achievements:</p>
                  <ul className='space-y-2'>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className='flex items-start gap-2 text-gray-700'>
                        <span className='text-[#49a54b] mt-1'>✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className='mb-8'>
            <h3 className='text-3xl font-bold text-white'>Education</h3>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {education.map((edu, index) => (
              <div key={index} className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex-1'>
                    <h4 className='text-xl font-bold text-[#241f21] mb-2'>{edu.degree}</h4>
                    <p className='text-lg text-[#49a54b] font-semibold mb-2'>{edu.school}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    edu.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                
                <p className='text-sm text-gray-600 mb-3'>{edu.period}</p>
                <p className='text-gray-700 mb-3'><span className='font-semibold'>Focus:</span> {edu.focus}</p>
                {edu.honors && (
                  <p className='text-sm text-[#49a54b] font-semibold'>{edu.honors}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience


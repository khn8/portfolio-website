import React from 'react'
import { 
  SiC, SiCsharp, SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiMysql,
  SiReact, SiTailwindcss, SiFlask, SiUnity, SiFastapi, SiPostgresql,
  SiGit, SiDocker, SiVisualstudiocode, SiEclipseide, SiLatex, SiFigma, SiAdobepremierepro, SiWindows, SiLinux
} from 'react-icons/si'

const Skills = () => {
  const getIcon = (skill) => {
    const skillLower = skill.toLowerCase();
    
    // Return icon component and brand color
    if (skillLower === 'c') return { icon: SiC, color: '#A8B9CC' };
    if (skillLower === 'c#') return { icon: SiCsharp, color: '#239120' };
    if (skillLower === 'python') return { icon: SiPython, color: '#3776AB' };
    if (skillLower === 'javascript') return { icon: SiJavascript, color: '#F7DF1E' };
    if (skillLower === 'typescript') return { icon: SiTypescript, color: '#3178C6' };
    if (skillLower === 'html') return { icon: SiHtml5, color: '#E34F26' };
    if (skillLower === 'css') return { icon: SiCss3, color: '#1572B6' };
    if (skillLower === 'sql') return { icon: SiMysql, color: '#4479A1' };
    if (skillLower === 'react') return { icon: SiReact, color: '#61DAFB' };
    if (skillLower === 'tailwind css') return { icon: SiTailwindcss, color: '#06B6D4' };
    if (skillLower === 'flask') return { icon: SiFlask, color: '#000000' };
    if (skillLower === 'unity') return { icon: SiUnity, color: '#FFFFFF' };
    if (skillLower === 'git') return { icon: SiGit, color: '#F05032' };
    if (skillLower === 'docker') return { icon: SiDocker, color: '#2496ED' };
    if (skillLower === 'vscode') return { icon: SiVisualstudiocode, color: '#007ACC' };
    if (skillLower === 'eclipse') return { icon: SiEclipseide, color: '#2C2255' };
    if (skillLower === 'latex') return { icon: SiLatex, color: '#008080' };
    if (skillLower === 'figma') return { icon: SiFigma, color: '#F24E1E' };
    if (skillLower === 'adobe premiere') return { icon: SiAdobepremierepro, color: '#9999FF' };
    if (skillLower === 'windows') return { icon: SiWindows, color: '#0078D6' };
    if (skillLower === 'linux') return { icon: SiLinux, color: '#FCC624' };
    return null;
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'C', 'C#', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'x86 Assembly', 'MIPS Assembly']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Tailwind CSS', 'Flask', 'REST APIs', 'Unity']
    },
    {
      title: 'Tools & Environment',
      skills: ['Git', 'Docker', 'VSCode', 'Eclipse', 'LaTeX', 'Junit', 'Selenium', 'Cucumber', 'Figma', 'Adobe Premiere', 'Windows', 'Linux']
    },
    {
      title: 'Technical Expertise',
      skills: ['Full-Stack Development', 'UI/UX Design', 'RESTful API Integration', 'Database Design', 'Responsive Web Design', 'Performance Optimization', 'Software Testing', 'Version Control']
    }
  ];

  const SkillTag = ({ skill }) => {
    const iconData = getIcon(skill);
    const IconComponent = iconData?.icon;
    const iconColor = iconData?.color;
    
    return (
      <span className='px-4 py-3 bg-[#1a1618] text-gray-100 rounded-lg hover:bg-[#49a54b] hover:text-white transition-all duration-300 transform hover:scale-105 border border-[#3a3638] hover:border-[#49a54b] text-xs font-medium flex flex-col items-center gap-2'>
        {IconComponent && (
          <span className='text-2xl' style={{ color: iconColor }}>
            <IconComponent className='w-8 h-8' />
          </span>
        )}
        <span className='text-center'>{skill}</span>
      </span>
    );
  };

  // Tech stack for scrolling animation - Row 1 (scrolls left)
  const techStackScroll1 = [
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiFlask, name: 'Flask', color: '#000000' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
  ];

  // Tech stack for scrolling animation - Row 2 (scrolls right)
  const techStackScroll2 = [
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiC, name: 'C', color: '#A8B9CC' },
    { icon: SiCsharp, name: 'C#', color: '#239120' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiUnity, name: 'Unity', color: '#000000' },
    { icon: SiVisualstudiocode, name: 'VS Code', color: '#007ACC' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  ];

  return (
    <div name='skills' className='w-full py-12 text-[#e0d6ad] bg-[#241f21]'>
      {/* Scrolling Tech Stack - At Top */}
      <div className='w-full pb-6 overflow-hidden space-y-6'>
        {/* First Row - Scrolls Left */}
        <div className='relative'>
          {/* Gradient Overlays */}
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#241f21] to-transparent z-10'></div>
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#241f21] to-transparent z-10'></div>
          
          {/* Scrolling Track */}
          <div className='flex overflow-hidden'>
            {/* First Set */}
            <div className='flex animate-scroll-left'>
              {techStackScroll1.map((tech, index) => (
                <div 
                  key={`row1-first-${index}`} 
                  className='flex flex-col items-center justify-center mx-8 min-w-[120px] group'
                >
                  <div className='text-6xl mb-3 transition-transform duration-300 group-hover:scale-110' style={{color: tech.color}}>
                    <tech.icon />
                  </div>
                  <span className='text-sm font-medium text-[#e0d6ad]'>{tech.name}</span>
                </div>
              ))}
            </div>
            
            {/* Duplicate Set for Seamless Loop */}
            <div className='flex animate-scroll-left'>
              {techStackScroll1.map((tech, index) => (
                <div 
                  key={`row1-second-${index}`} 
                  className='flex flex-col items-center justify-center mx-8 min-w-[120px] group'
                >
                  <div className='text-6xl mb-3 transition-transform duration-300 group-hover:scale-110' style={{color: tech.color}}>
                    <tech.icon />
                  </div>
                  <span className='text-sm font-medium text-[#e0d6ad]'>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Scrolls Right (opposite direction) */}
        <div className='relative'>
          {/* Gradient Overlays */}
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#241f21] to-transparent z-10'></div>
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#241f21] to-transparent z-10'></div>
          
          {/* Scrolling Track */}
          <div className='flex overflow-hidden'>
            {/* First Set */}
            <div className='flex animate-scroll-right'>
              {techStackScroll2.map((tech, index) => (
                <div 
                  key={`row2-first-${index}`} 
                  className='flex flex-col items-center justify-center mx-8 min-w-[120px] group'
                >
                  <div className='text-6xl mb-3 transition-transform duration-300 group-hover:scale-110' style={{color: tech.color}}>
                    <tech.icon />
                  </div>
                  <span className='text-sm font-medium text-[#e0d6ad]'>{tech.name}</span>
                </div>
              ))}
            </div>
            
            {/* Duplicate Set for Seamless Loop */}
            <div className='flex animate-scroll-right'>
              {techStackScroll2.map((tech, index) => (
                <div 
                  key={`row2-second-${index}`} 
                  className='flex flex-col items-center justify-center mx-8 min-w-[120px] group'
                >
                  <div className='text-6xl mb-3 transition-transform duration-300 group-hover:scale-110' style={{color: tech.color}}>
                    <tech.icon />
                  </div>
                  <span className='text-sm font-medium text-[#e0d6ad]'>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto px-8'>
        <div className='text-center mb-10'>
          <p className='text-4xl font-bold text-white mb-2'>
            Skills
          </p>
          <p className='text-base text-gray-100'>My arsenal of technologies and tools</p>
          <div className='w-20 h-0.5 bg-[#49a54b] mx-auto mt-3 rounded-full'></div>
        </div>

        {/* Skills Categories */}
        <div className='space-y-6'>
          {skillCategories.map((category, index) => (
            <div key={index} className='bg-[#1a1618]/50 rounded-xl p-5 border border-[#3a3638] hover:border-[#49a54b]/50 transition-all duration-300'>
              <div className='mb-3'>
                <h3 className='text-lg font-bold text-[#49a54b] mb-1'>{category.title}</h3>
                <div className='w-16 h-0.5 bg-[#49a54b] rounded-full'></div>
              </div>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className='mt-8 text-center'>
          <div className='bg-gradient-to-r from-[#49a54b]/10 to-[#62D28F]/10 rounded-xl p-5 border border-[#49a54b]/30'>
            <p className='text-base font-semibold text-[#49a54b] mb-3'>Languages</p>
            <div className='flex flex-wrap justify-center gap-3'>
              <span className='px-4 py-2 bg-[#1a1618] rounded-full text-[#e0d6ad] border border-[#3a3638] text-sm'>
                <span className='font-semibold'>Vietnamese</span> - Native
              </span>
              <span className='px-4 py-2 bg-[#1a1618] rounded-full text-[#e0d6ad] border border-[#3a3638] text-sm'>
                <span className='font-semibold'>English</span> - Fluent
              </span>
              <span className='px-4 py-2 bg-[#1a1618] rounded-full text-[#e0d6ad] border border-[#3a3638] text-sm'>
                <span className='font-semibold'>Mandarin Chinese</span> - Familiar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Skills
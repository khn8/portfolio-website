import React from 'react'

const About = () => { 
  return (
    <div name='about' className='w-full min-h-screen bg-[#E8DCC4] text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative'>
        {/* Decorative Star Icon - Responsive */}
        <div className='absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8'>
            <svg className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' />
            </svg>
        </div>

        <div className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-start pt-12 sm:pt-14 md:pt-16 pb-24 sm:pb-28 md:pb-32'>
            {/* Left Column - Text Content */}
            <div className='space-y-4 sm:space-y-6 md:space-y-8'>
                {/* Large Stylized Heading - Fully Responsive */}
                <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none' style={{fontFamily: 'Georgia, serif'}}>
                    About
                </h1>

                {/* Introduction Paragraph - Responsive Text */}
                <p className='text-base sm:text-lg leading-relaxed text-gray-800'>
                    Hello! My name is Ian Nguyen, and I'm a software engineer based in the United States. I specialize in full-stack development and UX design, crafting seamless, engaging, and most importantly <span className='italic'>fast</span> digital experiences.
                </p>

                {/* Personal Interest - Responsive Text */}
                <p className='text-base sm:text-lg leading-relaxed text-gray-800'>
                    Outside of being glued to my computer screen, you'll find me exploring new technologies, working on side projects, or contributing to open-source communities.
                </p>

                {/* Call to Action - Responsive Text */}
                <p className='text-base sm:text-lg leading-relaxed text-gray-800'>
                    I'm always eager to connect with fellow developers, designers, or anyone passionate about technology and innovation. Feel free to reach out if you'd like to collaborate or have any questions!
                </p>
            </div>

            {/* Right Column - Photo - Fully Responsive */}
            <div className='w-full max-w-md md:max-w-lg mx-auto md:mx-0 md:ml-8 lg:ml-12 mb-32 md:mb-40'>
                <div className='bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl aspect-[3/4] flex items-center justify-center'>
                    <img 
                        src={require('../assets/profile-photo.jpg')} 
                        alt='Ian Nguyen'
                        className='w-full h-full object-cover object-center'
                    />
                </div>
            </div>
        </div>

        {/* Fun Fact - Bottom Left Corner - Fully Responsive */}
        <div className='absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]'>
            <div className='bg-[#C8E6C9]/70 backdrop-blur-md rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300 border border-white/30 group'>
                <div className='flex flex-row items-center gap-2 sm:gap-3 md:gap-4'>
                    {/* Melona Interactive Images - Left Side - Responsive Size */}
                    <div className='relative w-14 h-24 sm:w-16 sm:h-28 md:w-18 md:h-32 lg:w-20 lg:h-36 flex-shrink-0 flex items-center justify-center melona-container'>
                        {/* Ice Cream/Popsicle - Behind (revealed on hover) */}
                        <div className='absolute inset-0 flex items-center justify-center z-0 melona-popsicle'>
                            <img 
                                src={require('../assets/melona-popsicle.png')} 
                                alt='Melona Ice Cream'
                                className='w-full h-full object-contain drop-shadow-lg'
                            />
                        </div>
                        
                        {/* Package - Front (sweeps left on hover) - Perfectly Overlaps */}
                        <div className='absolute inset-0 flex items-center justify-center z-10 melona-package'>
                            <img 
                                src={require('../assets/melona-package.png')} 
                                alt='Melona Package'
                                className='w-full h-full object-contain drop-shadow-xl'
                            />
                        </div>
                    </div>
                    
                    {/* Fun Fact Text - Right Side - Responsive Text */}
                    <div className='text-left flex-1'>
                        <p className='text-xs sm:text-sm md:text-sm font-bold text-[#2d5016] mb-1 sm:mb-1.5 md:mb-2'>Fun Fact:</p>
                        <p className='text-[10px] sm:text-xs md:text-sm text-[#3d6a1f] leading-relaxed mb-1 sm:mb-1.5 md:mb-2'>
                            The color of this site is based on my favorite ice cream called <span className='font-semibold'>Melona</span>, a Korean melon popsicle!
                        </p>
                        <p className='text-[9px] sm:text-[10px] md:text-xs text-[#49a54b] italic'>Hover to unwrap! 👆</p>
                    </div>
                </div>
            </div>
        </div>

        {/* CSS Animation for Package Sweep - Responsive */}
        <style jsx>{`
            .melona-popsicle {
                /* Popsicle is always visible, just covered by package */
            }

            .melona-package {
                /* Default: positioned to completely cover the popsicle */
                transform: translateX(2px) translateY(-1px) rotate(2deg);
                transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                transform-origin: center center;
            }

            .melona-container:hover .melona-package {
                /* On hover: move package away to reveal popsicle - scales with screen size */
                transform: translateX(-20px) translateY(-3px) rotate(-8deg);
            }

            /* Larger animation movement on bigger screens */
            @media (min-width: 640px) {
                .melona-container:hover .melona-package {
                    transform: translateX(-25px) translateY(-4px) rotate(-8deg);
                }
            }

            @media (min-width: 1024px) {
                .melona-container:hover .melona-package {
                    transform: translateX(-30px) translateY(-5px) rotate(-8deg);
                }
            }
        `}</style>
    </div>
  )
}

export default About
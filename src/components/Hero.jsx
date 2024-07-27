import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, delay: 0.5 }
    )
    .fromTo(
      descriptionRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      '-=0.5'
    )
    .fromTo(
      buttonsRef.current.children,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, stagger: 0.2 },
      '-=0.5'
    )
    .fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      '-=0.5'
    );
  }, []);

  return (
    <div ref={heroRef} className='relative bg-black overflow-hidden min-h-screen'>
      <div className='absolute top-0 left-0 w-[100vw] h-[100vh] bg-gradient-to-br from-green-600 via-transparent to-transparent opacity-30' />

      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-48 pb-16'>
        <div className='flex flex-col items-center text-left sm:text-left md:text-center'>
          <h1 
            ref={titleRef} 
            className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 font-bricolage max-w-[50rem]'
          >
            Send and Request funds Like never before
          </h1>
          <p 
            ref={descriptionRef} 
            className='text-xl text-gray-400 mb-10 mx-auto font-inter max-w-[32rem]'
          >
            Meet the system for modern software development.
            Streamline issues, projects, and product roadmaps.
          </p>
          <div ref={buttonsRef} className='flex justify-center space-x-4 w-full'>
            <button className='flex-1 md:flex-none px-6 py-3 bg-green-400 text-black rounded-full font-medium hover:bg-opacity-90 transition font-inter cursor-pointer'>
              Get the App
            </button>
            <button className='flex-1 md:flex-none px-6 py-3 bg-white bg-opacity-10 text-white rounded-full font-medium hover:bg-opacity-20 transition flex items-center font-inter cursor-pointer justify-center'>
              Get started
              <svg
                className='w-4 h-4 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>

        <div ref={imageRef} className='mt-20'>
          <div className='bg-gray-900 rounded-lg shadow-2xl overflow-hidden'>
            <div className='h-96 bg-gradient-to-b from-gray-800 to-gray-900' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

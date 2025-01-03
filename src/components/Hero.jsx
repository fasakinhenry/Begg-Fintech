// src/components/Hero.jsx
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
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, delay: 0.5 }
    )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        '-=0.5'
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
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
    <div
      ref={heroRef}
      className='relative bg-black overflow-hidden min-h-screen'
    >
      {/* Gradient in top left */}
      <div className='absolute top-0 left-0 w-[100vw] h-[100vh] bg-gradient-to-br from-green-600 via-transparent to-transparent opacity-30' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-16'>
        <div className='text-center flex flex-col items-center'>
          <h1
            ref={titleRef}
            className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 font-bricolage max-w-[50rem] md:text-center sm:text-left'
          >
            Send and Request funds Like never before
          </h1>
          <p
            ref={descriptionRef}
            className='text-xl text-gray-400 mb-10 mx-auto font-inter max-w-[32rem]'
          >
            Meet the system for modern software development. Streamline issues,
            projects, and product roadmaps.
          </p>
          <div ref={buttonsRef} className='flex justify-center space-x-4'>
            <button className='px-6 py-3 bg-green-400 text-black rounded-full font-medium hover:bg-opacity-90 transition font-inter cursor-pointer'>
              Get the App
            </button>
            <button className='px-6 py-3 bg-white bg-opacity-10 text-white rounded-full font-medium hover:bg-opacity-20 transition flex items-center font-inter cursor-pointer'>
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

        {/* Placeholder for the product image */}
        <div ref={imageRef} className='mt-20'>
          <div className='bg-gray-900 rounded-lg shadow-2xl overflow-hidden'>
            {/* You would replace this with an actual image of the Linear interface */}
            <div className='h-96 bg-gradient-to-b from-gray-800 to-gray-900' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

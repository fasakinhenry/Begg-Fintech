// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-40 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <img
              src='/logo.png'
              alt='Begg Logo'
              className='h-10 w-10 mr-5 rounded-md'
            />
            <a
              href='#'
              className='text-white font-semibold text-lg font-bricolage'
            >
              Begg
            </a>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {[
                'Features',
                'Method',
                'Customers',
                'Changelog',
                'Pricing',
                'Company',
                'Contact',
              ].map((item) => (
                <Link
                  key={item}
                  href='#'
                  className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Link
              to='/login'
              className='text-gray-300 hover:text-white text-sm font-medium'
            >
              Log in
            </Link>
            <Link
              to='/signup'
              className='px-3 py-2 rounded-md text-sm font-medium text-white bg-white bg-opacity-10 hover:bg-opacity-20'
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

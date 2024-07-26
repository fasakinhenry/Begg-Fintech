import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-black'>
      <div className='text-2xl font-bold'>Begg</div>
      <div className='flex space-x-4'>
        <a href='#' className='text-white'>
          Features
        </a>
        <a href='#' className='text-white'>
          Method
        </a>
        <a href='#' className='text-white'>
          Customers
        </a>
        <a href='#' className='text-white'>
          Changelog
        </a>
        <a href='#' className='text-white'>
          Company
        </a>
        <a href='#' className='text-white'>
          Contact
        </a>
        <button className='bg-gray-800 text-white px-4 py-2 rounded'>
          Log in
        </button>
        <button className='bg-white text-black px-4 py-2 rounded'>
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

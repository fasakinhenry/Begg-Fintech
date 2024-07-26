// src/layouts/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-black relative overflow-hidden'>
      {/* Gradient overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-800 via-transparent to-transparent opacity-10' />

      {/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
  );
};

export default Layout;

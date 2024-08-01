import React from 'react';

const LoginPageLayout = ({ children }) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-black text-white'>
      <div className='flex flex-col w-full max-w-4xl md:flex-row'>
        {children}
      </div>
    </div>
  );
};

export default LoginPageLayout;

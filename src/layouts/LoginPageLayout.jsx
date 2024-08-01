import React from 'react';

const LoginPageLayout = ({ children }) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-black text-white'>
      <div className='w-full max-w-md p-8'>{children}</div>
    </div>
  );
};

export default LoginPageLayout;

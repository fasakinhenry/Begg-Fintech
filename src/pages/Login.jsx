import React from 'react';

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900'>
      <div className='flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden'>
        <div className='w-full lg:w-1/2 bg-gray-800 p-8 lg:p-12'>
          <h2 className='text-2xl lg:text-3xl font-bold text-white mb-6'>
            Welcome To KVP
          </h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-gray-400'>Email</label>
              <input
                type='email'
                className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white'
                placeholder='YourEmail@provider.com'
              />
            </div>
            <div>
              <label className='block text-gray-400'>Password</label>
              <input
                type='password'
                className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white'
                placeholder='********'
              />
            </div>
            <div className='flex items-center justify-between'>
              <label className='flex items-center text-gray-400'>
                <input
                  type='checkbox'
                  className='form-checkbox bg-gray-700 text-green-500 mr-2'
                />
                Remember me
              </label>
              <a href='#' className='text-gray-400'>
                Forgot password?
              </a>
            </div>
            <button className='w-full py-3 bg-green-500 text-black rounded-lg hover:bg-green-400 transition duration-300'>
              Create account
            </button>
            <p className='text-gray-400 text-center mt-6'>
              Don't have an account?{' '}
              <a href='#' className='text-green-500'>
                Sign Up
              </a>
            </p>
          </form>
          <div className='mt-8 flex justify-center space-x-4'>
            <a href='#' className='text-gray-400 hover:text-white transition'>
              <i className='fab fa-google'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-white transition'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-white transition'>
              <i className='fab fa-twitter'></i>
            </a>
          </div>
        </div>
        <div className='hidden lg:block lg:w-1/2 bg-gray-900'>
          <img
            src='/login.png'
            alt='Random img'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

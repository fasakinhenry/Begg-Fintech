import React from 'react';
import LoginPageLayout from '../layouts/LoginPageLayout';
import { GoogleIcon, MicrosoftIcon, SecurityIcon } from '../components/Icons';

const Login = () => {
  return (
    <LoginPageLayout>
      <div className='flex flex-col items-center justify-center w-full h-full p-8 md:w-1/2'>
        <div className='mb-8 text-3xl font-bold text-center'>
          <img src='/path/to/logo.png' alt='Fireflies.ai' className='mb-4' />
          Automate your meeting notes
        </div>
        <p className='mb-8 text-center text-gray-400'>
          Transcribe, summarize, search, and analyze all your voice
          conversations.
        </p>
        <button className='flex items-center w-full px-4 py-2 mb-4 text-lg font-medium text-black bg-white rounded-md hover:bg-gray-200'>
          <GoogleIcon className='mr-2' />
          Continue with Google
        </button>
        <button className='flex items-center w-full px-4 py-2 mb-4 text-lg font-medium text-black bg-white rounded-md hover:bg-gray-200'>
          <MicrosoftIcon className='mr-2' />
          Continue with Microsoft
        </button>
        <a href='#' className='mb-8 text-sm text-blue-400 underline'>
          Why does Fireflies require access to my calendar?
        </a>
        <div className='flex items-center justify-center w-full px-4 py-2 mb-4 text-lg font-medium text-green-400 border border-green-400 rounded-md'>
          <SecurityIcon className='mr-2' />
          Secured by 256-bit AES and 256-bit SSL/TLS encryption
        </div>
        <p className='text-xs text-center text-gray-400'>
          By signing up, I agree to Fireflies'{' '}
          <a href='#' className='underline'>
            Terms of Service
          </a>
          ,{' '}
          <a href='#' className='underline'>
            Privacy Policy
          </a>
          , and{' '}
          <a href='#' className='underline'>
            Data Processing Terms
          </a>
          . Security is our top priority.{' '}
          <a href='#' className='underline'>
            Read
          </a>{' '}
          about the steps we take to ensure security.
        </p>
      </div>
      <div className='hidden md:flex items-center justify-center w-full h-full bg-gray-800 md:w-1/2'>
        <div className='relative w-full h-full p-8'>
          {/* Dark SVG grids */}
          <div className='absolute inset-0 opacity-50'>
            <svg className='w-full h-full'>
              <rect x='0' y='0' width='100%' height='100%' fill='url(#grid)' />
              <defs>
                <pattern
                  id='grid'
                  width='40'
                  height='40'
                  patternUnits='userSpaceOnUse'
                >
                  <path
                    d='M 40 0 L 0 0 0 40'
                    fill='none'
                    stroke='gray'
                    strokeWidth='1'
                  />
                </pattern>
              </defs>
            </svg>
          </div>
          {/* Centered image */}
          <div className='flex items-center justify-center w-full h-full'>
            <img
              src='/path/to/your-image.png'
              alt='Onboarding'
              className='max-w-full max-h-full'
            />
          </div>
        </div>
      </div>
    </LoginPageLayout>
  );
};

export default Login;

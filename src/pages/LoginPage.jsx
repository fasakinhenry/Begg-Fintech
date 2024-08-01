import React from 'react';
import LoginPageLayout from '../layouts/LoginPageLayout';
import { GoogleIcon, MicrosoftIcon, SecurityIcon } from '../components/Icons';

const Login = () => {
  return (
    <LoginPageLayout>
      <div className='flex flex-col items-center'>
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
    </LoginPageLayout>
  );
};

export default Login;

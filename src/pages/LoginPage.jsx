import React from 'react';

const LoginPage = () => {
  return (
    <div className='flex min-h-screen bg-[#000207] text-white'>
      {/* Left side */}
      <div className='flex flex-col w-full md:w-3/5 p-8'>
        <header className='flex mb-16 items-center'>
          {/* <img
            src='/logo.png'
            alt='fireflies.ai'
            className='h-10'
          /> */}
          <div className='font-bricolage ml-5 text-xl font-bold'>Begg</div>
        </header>
        <main className='flex-grow flex flex-col justify-center max-w-md mx-auto w-full'>
          <h1 className='text-4xl font-bold mb-4 font-bricolage'>
            Automate your meeting notes
          </h1>
          <p className='text-gray-400 mb-8 font-inter'>
            Transcribe, summarize, search, and analyze all your voice
            conversations.
          </p>
          <button className='flex items-center justify-center bg-[#fdfdfd] bg-opacity-10 hover:bg-opacity-20 text-white rounded-md py-3 mb-4 transition-colors font-inter'>
            <img src='/img/Google.svg' alt='' className='mr-2 h-5 w-5' />
            Continue with Google
          </button>
          <button className='flex items-center justify-center bg-[#fdfdfd] bg-opacity-10 hover:bg-opacity-20 text-white rounded-md py-3 mb-4 transition-colors font-inter'>
            <img
              src='/img/microsoft.svg'
              alt=''
              className='mr-2 h-5 w-5'
            />
            Continue with Microsoft
          </button>
          <a
            href='#'
            className='text-sm text-blue-400 hover:underline mb-8 text-center font-inter'
          >
            Why does Fireflies require access to my calendar?
          </a>
          <div className='flex items-center justify-center border border-green-600 rounded-md py-2 px-4 text-green-600 text-sm mb-8 font-inter'>
            <img src='/img/lock-icon.png' alt='' className='mr-2 h-4 w-4' />
            Secured by 256-bit AES and 256-bit SSL/TLS encryption
          </div>
          <p className='text-xs text-gray-500 text-center font-inter'>
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
        </main>
      </div>

      {/* Right side */}
      <div className='hidden md:flex md:w-2/5 bg-gray-900 relative flex-col items-center justify-center'>
        <img
          src='/img/login-background.png'
          alt='Background'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <img
          src='/img/begg-wallet.png'
          alt='Product Team Sync'
          className='relative z-10 max-w-sm max-h-[80vh]'
        />
        {/* <div className='relative z-10 bg-gray-800 rounded-lg p-4 max-w-sm text-center'>
          <img
            src='/img/vercel-logo.png'
            alt='Vercel'
            className='h-5 mb-2 mx-auto'
          />
          <p className='text-sm mb-4 font-inter'>
            "Fireflies keeps me 100% present in meetings without losing any of
            the details."
          </p>
          <div className='flex items-center justify-center'>
            <img
              src='/img/profile-picture.png'
              alt=''
              className='w-10 h-10 rounded-full mr-3'
            />
            <div>
              <p className='font-medium font-bricolage'>Sanip Banstola</p>
              <p className='text-sm text-gray-400 font-inter'>Head of Growth</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;

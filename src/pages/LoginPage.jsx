import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-[#000207] text-white">
      {/* Left side */}
      <div className="flex flex-col w-full md:w-1/2 p-8">
        <header className="mb-16">
          <img src="/img/fireflies-logo.png" alt="fireflies.ai" className="h-8" />
        </header>
        <main className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <h1 className="text-4xl font-bold mb-4">Automate your meeting notes</h1>
          <p className="text-gray-400 mb-8">
            Transcribe, summarize, search, and analyze all your voice conversations.
          </p>
          <button className="flex items-center justify-center bg-white text-black rounded-md py-3 mb-4 hover:bg-gray-100 transition-colors">
            <img src="/img/google-icon.png" alt="" className="mr-2 h-5 w-5" />
            Continue with Google
          </button>
          <button className="flex items-center justify-center bg-white text-black rounded-md py-3 mb-4 hover:bg-gray-100 transition-colors">
            <img src="/img/microsoft-icon.png" alt="" className="mr-2 h-5 w-5" />
            Continue with Microsoft
          </button>
          <a href="#" className="text-sm text-blue-400 hover:underline mb-8 text-center">
            Why does Fireflies require access to my calendar?
          </a>
          <div className="flex items-center justify-center border border-green-600 rounded-md py-2 px-4 text-green-600 text-sm mb-8">
            <img src="/img/lock-icon.png" alt="" className="mr-2 h-4 w-4" />
            Secured by 256-bit AES and 256-bit SSL/TLS encryption
          </div>
          <p className="text-xs text-gray-500 text-center">
            By signing up, I agree to Fireflies' <a href="#" className="underline">Terms of Service</a>, <a href="#" className="underline">Privacy Policy</a>, and <a href="#" className="underline">Data Processing Terms</a>. Security is our top priority. <a href="#" className="underline">Read</a> about the steps we take to ensure security.
          </p>
        </main>
      </div>

      {/* Right side */}
      <div className="hidden md:block w-1/2 bg-gray-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="bg-gray-800 rounded-lg p-4 max-w-sm w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Product Team Sync</span>
              <span className="text-xs text-gray-500">Feb 24 · 09:00 AM - 09:45 AM</span>
            </div>
            <h3 className="font-bold mb-2">Meeting Summary</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-pink-900 text-pink-300 text-xs px-2 py-1 rounded">Fireflies AI</span>
              <span className="bg-purple-900 text-purple-300 text-xs px-2 py-1 rounded">AI notetaker</span>
              <span className="bg-yellow-900 text-yellow-300 text-xs px-2 py-1 rounded">Meetings</span>
              <span className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded">Horizontal approach</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">In this meeting, Matt and Krish discuss the growth of Fireflies, an AI notetaker th...</p>
            <h4 className="font-medium mb-2">Outline</h4>
            <ul className="text-sm text-gray-400 list-disc list-inside">
              <li>1. Introduction 04:48 - 10:32</li>
              <li>• Matt acknowledges Fireflies AI and its growth</li>
              <li>• Krish invited to share the origin story of Fireflies</li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 bg-gray-800 rounded-lg p-4 max-w-sm">
          <img src="/img/vercel-logo.png" alt="Vercel" className="h-5 mb-2" />
          <p className="text-sm mb-4">"Fireflies keeps me 100% present in meetings without losing any of the details."</p>
          <div className="flex items-center">
            <img src="/img/profile-picture.png" alt="" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-medium">Sanip Banstola</p>
              <p className="text-sm text-gray-400">Head of Growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

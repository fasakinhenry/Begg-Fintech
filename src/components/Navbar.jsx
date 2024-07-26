// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <nav className="bg-white bg-opacity-10 backdrop-blur-md rounded-full px-4 py-2">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-white font-semibold text-sm">Linear</a>
          
          {['Features', 'Method', 'Customers', 'Changelog', 'Integrations', 'Pricing'].map((item) => (
            <a key={item} href="#" className="text-gray-300 hover:text-white text-sm font-medium">{item}</a>
          ))}
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium">Log in</a>
            <a href="#" className="px-3 py-1.5 rounded-full text-sm font-medium text-white bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-200">
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

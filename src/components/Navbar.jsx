// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md z-10 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">Begg</div>
      <div className="flex space-x-4">
        {['Features', 'Method', 'Customers', 'Changelog', 'Company', 'Contact'].map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item} className="text-white hover:underline">
            {item}
          </a>
        ))}
        <button className="bg-gray-800 text-white px-4 py-2 rounded">Log in</button>
        <button className="bg-white text-black px-4 py-2 rounded">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;

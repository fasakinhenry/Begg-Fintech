// src/components/BottomNavbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaExchangeAlt, FaQrcode, FaHubspot, FaUser } from 'react-icons/fa';

const BottomNavbar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-card text-white flex justify-around p-2">
      <NavLink to="/" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-green-500' : ''}`}>
        <FaHome />
        <span className="text-xs">Home</span>
      </NavLink>
      <NavLink to="/transfer" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-green-500' : ''}`}>
        <FaExchangeAlt />
        <span className="text-xs">Transfer</span>
      </NavLink>
      <NavLink to="/scan" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-green-500' : ''}`}>
        <FaQrcode />
        <span className="text-xs">Scan</span>
      </NavLink>
      <NavLink to="/hubs" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-green-500' : ''}`}>
        <FaHubspot />
        <span className="text-xs">Hubs</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-green-500' : ''}`}>
        <FaUser />
        <span className="text-xs">Profile</span>
      </NavLink>
    </div>
  );
};

export default BottomNavbar;

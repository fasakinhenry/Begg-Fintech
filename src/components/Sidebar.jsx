// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaExchangeAlt,
  FaQrcode,
  FaHubspot,
  FaUser,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='hidden md:flex flex-col bg-dark-card text-white h-full w-64 p-4'>
      <div className='flex items-center mb-8'>
        <img src='/logo.png' alt='Begg Logo' className='h-10' />
        <NavLink to='/' className='ml-3 text-2xl font-bold'>
          Begg
        </NavLink>
      </div>
      <nav className='flex flex-col space-y-4 flex-grow'>
        <NavLink
          to='/home'
          className={({ isActive }) =>
            `sidebar-link flex items-center text-lg ${
              isActive ? 'text-green-500' : ''
            }`
          }
        >
          <FaHome className='mr-3' /> Home
        </NavLink>
        <NavLink
          to='/transfer'
          className={({ isActive }) =>
            `sidebar-link flex items-center text-lg ${
              isActive ? 'text-green-500' : ''
            }`
          }
        >
          <FaExchangeAlt className='mr-3' /> Transfer
        </NavLink>
        <NavLink
          to='/scan'
          className={({ isActive }) =>
            `sidebar-link flex items-center text-lg ${
              isActive ? 'text-green-500' : ''
            }`
          }
        >
          <FaQrcode className='mr-3' /> Scan
        </NavLink>
        <NavLink
          to='/hubs'
          className={({ isActive }) =>
            `sidebar-link flex items-center text-lg ${
              isActive ? 'text-green-500' : ''
            }`
          }
        >
          <FaHubspot className='mr-3' /> Hubs
        </NavLink>
      </nav>
      <div className='mt-auto flex items-center'>
        <FaUser className='mr-3' />
        <div>
          <p className='font-bold'>Henry Fasakin</p>
          <p className='text-sm'>fasakinhenry@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

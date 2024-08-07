import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  MoneyChange,
  Scan,
  Category,
  LogoutCurve,
  SearchNormal1,
} from 'iconsax-react';

const Sidebar = () => {
  return (
    <div className='hidden md:flex flex-col bg-dark-card text-white h-full w-64 p-4'>
      <div className='flex items-center mb-8'>
        <img src='/logo.png' alt='Begg Logo' className='h-10 mr-3' />
        <NavLink to='/' className='text-2xl font-bricolage font-bold'>
          Begg
        </NavLink>
      </div>
      <div className='flex items-center mb-8'>
        <div className='relative w-full'>
          <SearchNormal1 className='absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500' />
          <input
            type='text'
            placeholder='Search'
            className='pl-10 pr-4 py-2 w-full bg-transparent border border-gray-500 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-400'
          />
        </div>
      </div>
      <nav className='flex flex-col space-y-4 flex-grow'>
        <NavLink
          to='/home'
          className={({ isActive }) =>
            `sidebar-link flex items-center text-lg font-inter ${
              isActive
                ? 'bg-gray-800 text-green-400 rounded-lg px-4 py-2'
                : 'hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Home
                className={`mr-3 ${isActive ? 'text-2xl font-bold' : ''}`}
                variant={isActive ? 'Bold' : 'Outline'}
              />
              Home
            </>
          )}
        </NavLink>
        <NavLink
          to='/transfer'
          className={({ isActive }) =>
            `sidebar-link flex items-center text-lg font-inter ${
              isActive
                ? 'bg-gray-800 text-green-400 rounded-lg px-4 py-2'
                : 'hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <MoneyChange
                className={`mr-3 ${isActive ? 'text-2xl font-bold' : ''}`}
                variant={isActive ? 'Bold' : 'Outline'}
              />
              Transfer
            </>
          )}
        </NavLink>
        <NavLink
          to='/scan'
          className={({ isActive }) =>
            `sidebar-link flex items-center text-lg font-inter ${
              isActive
                ? 'bg-gray-800 text-green-400 rounded-lg px-4 py-2'
                : 'hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Scan
                className={`mr-3 ${isActive ? 'text-2xl font-bold' : ''}`}
                variant={isActive ? 'Bold' : 'Outline'}
              />
              Scan
            </>
          )}
        </NavLink>
        <NavLink
          to='/hubs'
          className={({ isActive }) =>
            `sidebar-link flex items-center text-lg font-inter ${
              isActive
                ? 'bg-gray-800 text-green-400 rounded-lg px-4 py-2'
                : 'hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Category
                className={`mr-3 ${isActive ? 'text-2xl font-bold' : ''}`}
                variant={isActive ? 'Bold' : 'Outline'}
              />
              Hubs
            </>
          )}
        </NavLink>
        <NavLink
          to='/logout'
          className={({ isActive }) =>
            `sidebar-link flex items-center text-lg font-inter ${
              isActive
                ? 'bg-gray-800 text-green-400 rounded-lg px-4 py-2'
                : 'hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <LogoutCurve
                className={`mr-3 ${isActive ? 'text-2xl font-bold' : ''}`}
                variant={isActive ? 'Bold' : 'Outline'}
              />
              Logout
            </>
          )}
        </NavLink>
      </nav>
      <div className='mt-auto flex items-center pt-4 border-t border-gray-700'>
        <img
          src='/profile.jpg'
          alt='Profile'
          className='h-12 w-12 rounded-full mr-3'
        />
        <div className='flex flex-col font-inter'>
          <p className='font-bold'>Henry Fasakin</p>
          <p className='text-sm'>fasakinhenry@gmail.com</p>
        </div>
        <LogoutCurve
          className='ml-4 text-2xl cursor-pointer text-gray-500 hover:text-green-400'
          variant='Outline'
        />
      </div>
    </div>
  );
};

export default Sidebar;

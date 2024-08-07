// src/components/BottomNavbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home2, MoneyChange, Scan, Category, User } from 'iconsax-react';

const BottomNavbar = () => {
  return (
    <div className='md:hidden fixed bottom-0 left-0 right-0 bg-dark-card text-white flex justify-around p-3'>
      <NavLink
        to='/home'
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? 'text-green-500' : 'text-gray-400'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Home2
              size='24'
              variant={isActive ? 'Bold' : 'Outline'}
              className='mb-1'
            />
            <span
              className={`text-xs font-inter ${
                isActive ? 'text-green-500' : ''
              }`}
            >
              Home
            </span>
          </>
        )}
      </NavLink>
      <NavLink
        to='/transfer'
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? 'text-green-500' : 'text-gray-400'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <MoneyChange
              size='24'
              variant={isActive ? 'Bold' : 'Outline'}
              className='mb-1'
            />
            <span
              className={`text-xs font-inter ${
                isActive ? 'text-green-500' : ''
              }`}
            >
              Transfer
            </span>
          </>
        )}
      </NavLink>
      <NavLink
        to='/scan'
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? 'text-green-500' : 'text-gray-400'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Scan
              size='24'
              variant={isActive ? 'Bold' : 'Outline'}
              className='mb-1'
            />
            <span
              className={`text-xs font-inter ${
                isActive ? 'text-green-500' : ''
              }`}
            >
              Scan
            </span>
          </>
        )}
      </NavLink>
      <NavLink
        to='/hubs'
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? 'text-green-500' : 'text-gray-400'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Category
              size='24'
              variant={isActive ? 'Bold' : 'Outline'}
              className='mb-1'
            />
            <span
              className={`text-xs font-inter ${
                isActive ? 'text-green-500' : ''
              }`}
            >
              Hubs
            </span>
          </>
        )}
      </NavLink>
      <NavLink
        to='/profile'
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? 'text-green-500' : 'text-gray-400'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <User
              size='24'
              variant={isActive ? 'Bold' : 'Outline'}
              className='mb-1'
            />
            <span
              className={`text-xs font-inter ${
                isActive ? 'text-green-500' : ''
              }`}
            >
              Profile
            </span>
          </>
        )}
      </NavLink>
    </div>
  );
};

export default BottomNavbar;

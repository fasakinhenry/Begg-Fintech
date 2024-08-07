// src/layouts/MainLayout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import BottomNavbar from '../components/BottomNavbar';

const MainLayout = ({ children }) => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-grow text-black p-6 overflow-auto'>{children}</div>
      <BottomNavbar />
    </div>
  );
};

export default MainLayout;

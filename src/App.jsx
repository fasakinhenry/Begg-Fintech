// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
import Home from './pages/Home';
import Transfer from './pages/Transfer';
import Scan from './pages/Scan';
import Hubs from './pages/Hubs';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import BottomNavbar from './components/BottomNavbar';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/home'
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path='/transfer'
          element={
            <MainLayout>
              <Transfer />
            </MainLayout>
          }
        />
        <Route
          path='/scan'
          element={
            <MainLayout>
              <Scan />
            </MainLayout>
          }
        />
        <Route
          path='/hubs'
          element={
            <MainLayout>
              <Hubs />
            </MainLayout>
          }
        />
        <Route
          path='/logout'
          element={
            <MainLayout>
              <Logout />
            </MainLayout>
          }
        />
        <Route
          path='/profile'
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

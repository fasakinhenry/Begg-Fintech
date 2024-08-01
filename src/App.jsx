import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import Login from './pages/Login';
import Login from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

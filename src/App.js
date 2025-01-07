import React, { useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

import Nav from './components/Nav';

import Home from './pages/Home';
import Register from './pages/Register';
import Verification from './pages/Verification';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import CredentialsDashboard from './pages/CredentialsDashboard.js';
import About from './pages/About.js';
import Login from './pages/Login'; // Import Login page

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState(''); // 'user' or 'admin'
  const navigate = useNavigate();

  const handleUserLogin = () => {
    setLoggedIn(true);
    setRole('user');
    navigate('/'); // User's main page is Home
  };

  const handleAdminLogin = () => {
    setLoggedIn(true);
    setRole('admin');
    navigate('/Dashboard'); // Admin's main page is Dashboard
  };

  return (
    <div className="App h-screen flex justify-center bg-primary-bg">
      <Helmet>
        <title>IDEN3</title>
      </Helmet>
      {!isLoggedIn ? (
        // Login Routes
        <Routes>
          <Route
            path="/login"
            element={<Login handleUserLogin={handleUserLogin} handleAdminLogin={handleAdminLogin} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <>
          <Nav role={role} />

          <div className="pt-20">
            <Routes>
              {/* User Routes */}
              {role === 'user' && (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/CredentialsDashboard" element={<CredentialsDashboard />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              )}

              {/* Admin Routes */}
              {role === 'admin' && (
                <>
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Verification" element={<Verification />} />
                  <Route path="/Settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/Dashboard" />} />
                </>
              )}
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

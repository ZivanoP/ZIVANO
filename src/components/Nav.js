import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear token
    navigate("/login"); // Navigate to Login page after logout
  };

  const userLinks = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About' },
    { path: '/Register', label: 'Register' },
    { path: '/settings', label: 'Settings' },
    { path: '/CredentialsDashboard', label: 'Credentials' },
  ];

  const adminLinks = [
    { path: '/Dashboard', label: 'Dashboard' },
    { path: '/Verification', label: 'Verification' },
    { path: '/settings', label: 'Settings' },
  ];

  const linksToShow = role === 'admin' ? adminLinks : userLinks;

  return (
    <nav className="bg-[#1e2025] text-white p-4 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">ID3N</div>
        <ul className="hidden lg:flex justify-end space-x-6 mt-4 lg:mt-0 flex-grow">
          {linksToShow.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="hover:text-[#92a4b1] transition duration-300">
                {link.label}
              </Link>
            </li>
          ))}
          {/* Desktop Logout Button */}
          <li>
            <button
              onClick={handleLogout}
              className="text-white bg-gray-600 px-6 py-2 rounded-full shadow-lg hover:bg-gray-500 transition duration-300"
            >
              Logout
            </button>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <button className="lg:hidden flex items-center space-x-2" onClick={toggleMenu}>
          <div className={`w-8 h-0.5 bg-white transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-white transform transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-white transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-[#1e2025] transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col justify-between h-full">
          <ul className="flex flex-col items-center mt-20 space-y-6">
            {linksToShow.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="hover:text-[#92a4b1] transition duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Mobile Logout Button */}
            <li>
              <button
                onClick={handleLogout}
                className="text-white bg-gray-600 px-6 py-2 rounded-full shadow-lg hover:bg-gray-500 transition duration-300"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

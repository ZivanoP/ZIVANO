import React from 'react';

const Login = ({ handleUserLogin, handleAdminLogin }) => {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 flex items-center justify-center">
      <div className="text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-8 font-mono">
          Welcome, Please Login
        </h2>

        {/* User Login */}
        <button
          onClick={handleUserLogin}
          className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg text-lg transition-transform transform hover:scale-105 hover:shadow-blue-400"
        >
          Login as User
        </button>

        {/* Admin Login */}
        <div className="mt-8">
          <button
            onClick={handleAdminLogin}
            className="px-10 py-4 bg-gray-800 text-white font-semibold rounded-full shadow-lg text-lg transition-transform transform hover:scale-105 hover:shadow-gray-600"
          >
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

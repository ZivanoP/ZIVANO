// src/components/Dashboard.js

import React from "react";
import './reg.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="h-[20vh] sm:w-md min-h-screen bg-[var(--primary-bg)] text-[var(--primary-text)] p-8">
     

      

      {/* Identity Management Section */}
      <section className="bg-[var(--secondary-bg)] p-6 rounded-lg mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Manage Your Identity</h2>
        <p className="text-[var(--secondary-text)] mb-4">
          Your identity has been verified. You can manage your identity or request additional verification here.
        </p>
        <button className="bg-[var(--highlight-color)] text-[var(--primary-text)] px-4 py-2 rounded hover:bg-[var(--button-hover-bg)]">
          Request Verification
        </button>
      </section>

      {/* Verification Requests Section */}
      <section className="bg-[var(--secondary-bg)] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Verification Requests</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span className="text-[var(--secondary-text)]">Banking Verification</span>
            <button className="bg-[var(--accent-color)] text-[var(--primary-text)] px-4 py-2 rounded hover:bg-[var(--button-hover-bg)]">
              Request
            </button>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-[var(--secondary-text)]">Social Media Verification</span>
            <button className="bg-[var(--accent-color)] text-[var(--primary-text)] px-4 py-2 rounded hover:bg-[var(--button-hover-bg)]">
              Request
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;

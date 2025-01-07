import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'; // For routing
import '../components/VerifiedCredentials';
import VerifiedCredentials from '../components/VerifiedCredentials';


const Dashboard = () => {

  const [requests, setRequests] = useState(0);

  // Simulate changing numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setRequests((prev) => {
        const newNumber = Math.floor(Math.random() * 1000) + 100; // Random between 100-1099
        return newNumber;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-between">
      {/* Top Section */}
       {/* Header Section */}
       <header className="flex items-center justify-center mb-8 py-12">
  <h1 className="text-3xl font-weight-200">
    Welcome to the <span className="text-neon-blue">ZIVANO</span> Dashboard
  </h1>
</header>



      <div className="flex flex-col md:flex-row w-full gap-4 mb-8">
        <div className="flex-1 p-6 bg-gray-600 rounded shadow flex items-center justify-center">
         <section className="mb-8 p-6 rounded shadow bg-gray-800 flex flex-col md:flex-row items-center gap-6 border-4 border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 hover:border-blue-700">
  <div className="text-left md:w-1/2">
    <h2 className="text-2xl font-bold mb-4 text-gray-100 underline decoration-blue-500">Request KYC</h2>
    <p className="text-gray-300 leading-relaxed mb-4">
      KYC (Know Your Customer) is a process that ensures the identity of our users is verified. 
      It helps us provide secure services while preventing fraud and ensuring compliance with regulations.
    </p>
    {/* Button links to the verification page */}
    <Link to="/verification">  
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105 hover:blur-sm">
        REQUEST KYC
      </button>
    </Link>
  </div>

  {/* Vertical border in the middle */}
  <div className="hidden md:block h-full border-l-4 border-blue-500"></div>

  <div className="md:w-1/2 flex justify-center">
    <img
      src="/pics/woman.png" // Replace with your actual image name
      alt="Innovative Technology"
      className="w-64 h-64 rounded-full border-4 border-blue-500 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500"
    />
  </div>
</section>
        </div>
       
        <div className="flex-1 p-6 bg-gray-500 rounded shadow flex items-center justify-center">
        <section className="p-6 bg-gray-800 rounded shadow mb-8">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-white mb-4">Third-Party Verifiers</h2>
      
      {/* Paragraph */}
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Third-Parties using zivano to verify different identies
      </p>

      {/* Three Numbers side by side */}
      <div className="flex justify-between space-x-4">
        <div className="flex-1 text-center">
          <p className="text-4xl font-bold text-blue-500">2.5%</p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-4xl font-bold text-blue-500">2.5%</p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-4xl font-bold text-blue-500">2.5%</p>
        </div>
      </div>
    </section>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row w-full gap-4 mb-8">
        <div className="flex-1 p-6 bg-gray-800 rounded shadow flex items-center justify-center">
        <section className="p-6 bg-gray-800 rounded shadow mb-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Top Left: Total Verified Users */}
        <div className="flex flex-col justify-center items-center p-4 bg-gray-700 rounded shadow">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Total Verified Users</h3>
          <p className="text-lg text-gray-300">1,234</p>
        </div>

        {/* Top Right: Users on the Waitlist */}
        <div className="flex flex-col justify-center items-center p-4 bg-gray-700 rounded shadow">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Users on the Waitlist</h3>
          <p className="text-lg text-gray-300">567</p>
        </div>

        {/* Bottom Left: Picture + Button */}
        <div className="flex flex-col items-center p-4 bg-gray-700 rounded shadow row-span-2">
          <img
            src="/pics/4.png" // Replace with the actual image path
            alt="Verify Users"
            className="w-2/3  mb-4"
          />
          <Link
            to="/verification"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            Verify Users
          </Link>
        </div>

        {/* Bottom Right: Picture + Button */}
        <div className="flex flex-col items-center p-4 bg-gray-700 rounded shadow row-span-2">
          <img
            src="/pics/9.png" // Replace with the actual image path
            alt="Verify Information"
            className="w-2/3 rounded-full mb-4"
          />
          <Link
            to="/verification"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            Verify Information
          </Link>
        </div>
      </div>
    </section>
        </div>
        <div className="flex-1 p-6 bg-gray-800 rounded shadow flex items-center justify-center">
        <section className="p-6 bg-gray-800 rounded shadow mb-8 space-y-6">
      {/* Part 1 */}
      <div className="flex items-center border border-blue-500 p-4 rounded shadow">
        <img
          src="/pics/11.png" // Replace with your actual image path
          alt="Part 1"
          className="w-1/3 rounded-md"
        />
        <div className="ml-6">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Uknown Individual</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
           
          A background check verifies someone's history, providing key details for jobs, partnerships, or personal reasons.
          </p>
        </div>
      </div>

      {/* Part 2 */}
      <div className="flex items-center border border-blue-500 p-4 rounded shadow">
        <img
          src="/pics/8.png" // Replace with your actual image path
          alt="Part 2"
          className="w-1/3 rounded-md"
        />
        <div className="ml-6">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Check Details</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
          ZIVANO simplifies background checks by verifying data from trusted sources, ensuring accuracy and authenticity.
          </p>
        </div>
      </div>

      {/* Part 3 */}
      <div className="flex items-center border border-blue-500 p-4 rounded shadow">
        <img
          src="/pics/5.png" // Replace with your actual image path
          alt="Part 3"
          className="w-1/3 rounded-md"
        />
        <div className="ml-6">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Confirm Details</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
          ZIVANO makes verification fast and easy, with no extra paperwork needed. Just a few clicks, and you're done!
          </p>
        </div>
      </div>
    </section>
        </div>
        <div className="flex-1 p-6 bg-gray-400 rounded shadow flex items-center justify-center">
         <section className="p-8 bg-gray-800 rounded shadow text-center">
         <h1 class="text-2xl font-bold text-center ">Monthly Registrations Nationwide</h1>

      {/* Calendar Shape */}
      <div className="bg-gray-900 rounded-lg shadow-md w-72 mx-auto p-6 relative border-4 border-blue-500">
        {/* Calendar Header */}
       
        <div className="bg-blue-500 text-white rounded-t-md py-2 text-lg font-semibold">
          Monthly Registrations
        </div>
        {/* Dynamic Number */}
        <div className="py-12 text-blue-400 text-4xl font-bold">
          {requests.toLocaleString()} {/* Format as number with commas */}
        </div>
        {/* Footer */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
          Simulated data
        </div>
      </div>
    </section>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex-1 p-6 bg-gray-800 rounded shadow flex items-center justify-center">
          <div className="text-center">
            <VerifiedCredentials />
          </div>
        </div>
        <div className="flex-1 p-6 bg-gray-800 rounded shadow flex items-center justify-center">
        <section className="p-6 bg-gray-800 text-gray-300 rounded-lg border-4 border-blue-500">
  <h2 className="text-2xl font-bold text-center mb-4">Facial Recognition</h2>
  <div className="space-y-4">
    {/* First Image */}
    <div className="flex justify-center">
      <img
        src="/pics/6.png"  // Replace with actual image path
        alt="Description of first"
        className="w-5/12 md:w-1/2 lg:w-1/3 h-auto rounded-lg shadow-xl"
      />
    </div>
    {/* Second Image */}
    <div className="flex justify-center">
      <img
        src="/pics/7.png"  // Replace with actual image path
        alt="Description of second"
        className="w-5/12 md:w-1/2 lg:w-1/3 h-auto rounded-lg shadow-xl"
      />
    </div>
  </div>
  <div className="flex justify-center mt-8">
        <Link to="/verification">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105 hover:blur-sm">
            Go to Verification
          </button>
        </Link>
      </div>
</section>

        </div>
     
      </div>

      {/* Navigation Button */}
     
    </section>
  );
};

export default Dashboard;

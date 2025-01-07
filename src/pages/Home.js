import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For smooth animations
 // Adjust the import path as necessary

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1e2025] to-[#3c5665] text-white pt-20"> {/* Add pt-20 to avoid content being hidden under fixed nav */}
      {/* Include Nav Component */}
    

      {/* Dashboard Title */}
      <motion.h1
        className="text-5xl font-semibold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome Back to Your Dashboard
      </motion.h1>

      {/* User Info Section */}
      <motion.div
        className="w-96 bg-[#29343d] p-6 rounded-lg shadow-xl mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Your Wallet Details</h2>
        <p className="mb-2">Address: 0x9f9a...c0ad</p>
        <p>Balance: 5.25 ETH</p>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <motion.button
          onClick={() => navigate("/transactions")}
          className="bg-[#92a4b1] text-[#1e2025] px-6 py-3 rounded-lg shadow-lg hover:bg-[#3c5665] transition duration-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          View Transactions
        </motion.button>

        <motion.button
          onClick={() => navigate("/profile")}
          className="bg-[#5a7480] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#3c5665] transition duration-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Edit Profile
        </motion.button>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-8 text-center text-[#92a4b1]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>&copy; 2024 Iden3. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default Home;

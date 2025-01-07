import React from "react";
import IdCard from "../components/IdCard";
import { Link } from "react-router-dom";

const CredentialsDashboard = () => {
  const credentials = [
    {
      id: 1,
      name: "Alice Johnson",
      dob: "1990-05-15",
      idNumber: "1234-5678-9012",
      photoUrl: "/pics/2.jpg",
      status: "Verified",
    },
    {
      id: 2,
      name: "Bob Smith",
      dob: "1985-11-22",
      idNumber: "9876-5432-1011",
      photoUrl: "/pics/1.jpg",
      status: "Pending",
    },
    {
      id: 3,
      name: "Charlie Brown",
      dob: "1993-08-02",
      idNumber: "4567-8910-1234",
      photoUrl: "/pics/3.jpg",
      status: "Denied",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-semibold mb-8 py-8 text-center">Credentials Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {/* Static Content: Banking KYC */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Banking KYC</h2>
          <div className="text-green-500 mt-2 flex items-center space-x-2 mb-4">
            <span>Valid</span>
            <i className="fas fa-check-circle" />
          </div>
          <img
            src="/pics/5.png"
            alt="QR Code"
            className="mt-4 rounded-lg shadow-md w-32 h-32 object-cover"
          />
         <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
  <Link to="/verification" className="text-white">
    View Details
  </Link>
</button>
        </div>

        {/* ID Cards: Map over credentials */}
        {credentials.map((user) => (
          <IdCard
            key={user.id}
            name={user.name}
            dob={user.dob}
            idNumber={user.idNumber}
            photoUrl={user.photoUrl}
            status={user.status}
          />
        ))}
      </div>
    </div>
  );
};

export default CredentialsDashboard;

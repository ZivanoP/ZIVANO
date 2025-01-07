import React, { useState } from "react";

const Verification= () => {
  const [zkpId, setZkpId] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const handleViewDetails = () => {
    // Mock data for demonstration purposes
    const mockData = {
      name: "John Doe",
      surname: "Smith",
      email: "john.smith@example.com",
      ids: {
        ID: "123456789",
        Passport: "A1234567",
        DriversLicense: "D987654321",
      },
      address: "123 Main St, Springfield, USA",
      nextOfKin: {
        name: "Jane Doe",
        relationship: "Spouse",
        contact: "987-654-3210",
      },
    };
    setUserDetails(mockData);
  };

  const requests = [
    { id: 1, name: "John Doe", type: "KYC", details: "Passport and Utility Bill" },
    { id: 2, name: "Jane Smith", type: "Age Verification", details: "Driver's License" },
    { id: 3, name: "Mike Lee", type: "KYC", details: "National ID and Address Proof" },
  ];

  return (
    <div className="py-12">
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {requests.map((request, index) => (
    <div
      key={request.id}
      className={`p-4 rounded-lg shadow-lg border ${
        index === 0
          ? "bg-blue-50 border-blue-300" // Passport
          : index === 1
          ? "bg-gray-50 border-gray-300" // Driver's License
          : "bg-green-50 border-green-300" // ID Card
      }`}
    >
      {/* Header */}
      <div
        className={`text-center py-2 rounded ${
          index === 0
            ? "bg-blue-400 text-white"
            : index === 1
            ? "bg-gray-400 text-white"
            : "bg-green-400 text-white"
        }`}
      >
        <h3 className="text-lg font-bold uppercase">
          {index === 0
            ? "Passport"
            : index === 1
            ? "Driver's License"
            : "Identification Card"}
        </h3>
      </div>

      {/* Details */}
      <div className="mt-4 text-left">
        {/* Photo */}
        <img
          src="/pics/1.jpg"
          alt="User P"
          className="w-20 h-20 rounded-full mx-auto mb-4 border border-gray-300"
        />

        <p>
          <strong>Full Name:</strong> {request.name} {request.middleName || ""}
        </p>
        <p>
          <strong>Date of Birth:</strong> {request.dob}
        </p>
        <p>
          <strong>
            {index === 0
              ? "Passport Number"
              : index === 1
              ? "License Number"
              : "ID Number"}
            :
          </strong>{" "}
          {index === 0
            ? request.passportNumber || "P123456789"
            : index === 1
            ? request.licenseNumber || "DL987654321"
            : request.idNumber || "ID202303"}
        </p>
        {index === 1 && (
          <p>
            <strong>License Class:</strong> {request.licenseClass || "Class C"}
          </p>
        )}
        {index === 0 && (
          <p>
            <strong>Nationality:</strong> {request.nationality || "Citizen"}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Accept
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Reject
        </button>
      </div>
    </div>
  ))}
</div>


      {/* ZKP ID Input Section */}
      <div className="mt-8 p-4 border-t">
        <h2 className="text-xl font-bold mb-4">View User Details</h2>
        <p className="text-white-700 mb-4">
          Enter the ZKP ID to retrieve and view user details securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
        <input
  type="text"
  className="border p-2 rounded w-full sm:w-auto text-black"
  placeholder="Enter ZKP Number"
  value={zkpId}
  onChange={(e) => {
    // Allow only digits
    if (/^\d*$/.test(e.target.value)) {
      setZkpId(e.target.value);
    }
  }}
/>
          <button
            className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Simulation Page */}
      {userDetails && (
        <div className="mt-8 p-4 border rounded shadow">
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <p>
            <strong>Name:</strong> {userDetails.name} {userDetails.surname}
          </p>
          <p>
            <strong>Email:</strong> {userDetails.email}
          </p>
          <p>
            <strong>IDs:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>ID: {userDetails.ids.ID}</li>
            <li>Passport: {userDetails.ids.Passport}</li>
            <li>Driver's License: {userDetails.ids.DriversLicense}</li>
          </ul>
          <p>
            <strong>Address:</strong> {userDetails.address}
          </p>
          <p>
            <strong>Next of Kin:</strong> {userDetails.nextOfKin.name} (
            {userDetails.nextOfKin.relationship}), Contact:{" "}
            {userDetails.nextOfKin.contact}
          </p>
        </div>
      )}
    </div>
  );
};

export default Verification;

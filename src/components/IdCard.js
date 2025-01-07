import React from "react";

const IdCard = ({ name, idNumber, dob, photoUrl }) => {
  return (
    <div className="w-96 h-48 bg-gray-50 border border-gray-300 shadow-lg rounded-lg p-4 flex space-x-4">
      {/* Left side: Profile Picture */}
      <div className="w-20 h-20  rounded overflow-hidden">
        <img src={photoUrl} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Right side: ID Info */}
      <div className="flex flex-col justify-between w-full">
        <div className="text-2xl font-semibold text-black-800">{name}</div>
        <div className="text-m text-gray-500">DOB: {dob}</div>
        <div className="text-xl font-mono text-gray-700">ID: {idNumber}</div>
        <div className="mt-2 text-xs text-gray-400">
          Issued by: Credentials Authority
        </div>
      </div>
    </div>
  );
};

export default IdCard;

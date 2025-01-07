import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Use the named export

const VerifiedCredentials = () => {
  const credentials = [
    { id: 1, name: 'Passport', status: 'Valid' },
    { id: 2, name: 'Driver’s License', status: 'Expired' },
  ];

  return (
    <section className="p-4 bg-gray-800 text-gray-300 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Verified Credentials</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700">
        Add New Credential
      </button>
      <div className="grid gap-4 md:grid-cols-2">
        {credentials.map((cred) => (
          <div key={cred.id} className="border p-4 rounded bg-gray-900 shadow-md">
            <h3 className="text-lg font-semibold">{cred.name}</h3>
            <p className={`mt-2 ${cred.status === 'Valid' ? 'text-green-500' : 'text-red-500'}`}>
              {cred.status}
            </p>
            <QRCodeCanvas value={`Credential: ${cred.name}`} size={100} className="mt-4 mx-auto" />
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerifiedCredentials;

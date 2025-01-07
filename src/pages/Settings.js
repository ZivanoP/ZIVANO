import React, { useState } from "react";

const Settings = () => {
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);
  const [dataSharing, setDataSharing] = useState("private");
  const [feeSponsorship, setFeeSponsorship] = useState(false);

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-400">
          Configure your privacy, biometric data, and blockchain preferences.
        </p>
      </header>

      {/* Biometric Data Section */}
      <div className="mb-6 p-4 rounded shadow bg-gray-800">
        <h2 className="text-xl font-bold mb-4">Biometric Data</h2>
        <div className="flex items-center justify-between">
          <span>Enable Biometrics</span>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-500"
              checked={biometricsEnabled}
              onChange={() => setBiometricsEnabled(!biometricsEnabled)}
            />
          </label>
        </div>
        {biometricsEnabled && (
          <div className="mt-4 p-3 border rounded bg-gray-700">
            <h3 className="text-lg font-bold mb-2">Biometric Simulation</h3>
            <p className="text-gray-400">
              Fingerprint data: <span className="text-blue-400">Valid</span>
            </p>
            <p className="text-gray-400">
              Face scan: <span className="text-blue-400">Valid</span>
            </p>
          </div>
        )}
      </div>

      {/* Privacy Controls Section */}
      <div className="mb-6 p-4 rounded shadow bg-gray-800">
        <h2 className="text-xl font-bold mb-4">Privacy Controls</h2>
        <p className="text-gray-400 mb-4">
          Set your data-sharing preferences for third parties.
        </p>
        <select
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={dataSharing}
          onChange={(e) => setDataSharing(e.target.value)}
        >
          <option value="private">Private</option>
          <option value="limited">Limited Sharing</option>
          <option value="public">Public</option>
        </select>
        <div className="mt-4 p-3 border rounded bg-gray-700">
          <h3 className="text-lg font-bold mb-2">Current Preference</h3>
          <p className="text-gray-400">
            You have set your data-sharing preference to:{" "}
            <span className="text-blue-400">{dataSharing}</span>
          </p>
        </div>
      </div>

      {/* Blockchain Fee Sponsorship */}
      <div className="mb-6 p-4 rounded shadow bg-gray-800">
        <h2 className="text-xl font-bold mb-4">Blockchain Fee Sponsorship</h2>
        <div className="flex items-center justify-between">
          <span>Opt-in for Sponsorship</span>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-500"
              checked={feeSponsorship}
              onChange={() => setFeeSponsorship(!feeSponsorship)}
            />
          </label>
        </div>
        {feeSponsorship && (
          <div className="mt-4 p-3 border rounded bg-gray-700">
            <h3 className="text-lg font-bold mb-2">Sponsorship Simulation</h3>
            <p className="text-gray-400">
              Current transaction fees: <span className="text-blue-400">0.01 ETH</span>
            </p>
            <p className="text-gray-400">
              Fees sponsored by the network: <span className="text-green-400">Yes</span>
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500">
        <p>Secure, Transparent, and User-Centric Settings</p>
      </footer>
    </div>
  );
};

export default Settings;

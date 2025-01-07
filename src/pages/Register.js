import React, { useState } from 'react';
import './reg.css';
import Camera from '../components/Camera';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [identifications, setIdentifications] = useState([{ type: '', document: null }]);
  const [kinName, setKinName] = useState('');
  const [kinPhone, setKinPhone] = useState('');
  const [kinRelationship, setKinRelationship] = useState('');
  const [zkpNumber, setZkpNumber] = useState(null);
  const [showDocument, setShowDocument] = useState(false); // To control document visibility

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a random ZKP number
    const zkpNumber = Math.floor(Math.random() * 1000000); // Random number as ZKP
    setZkpNumber(zkpNumber); // Store the generated number

    console.log({
      name,
      surname,
      email,
      dob,
      nationality,
      phoneNumber,
      identifications,
      kinName,
      kinPhone,
      kinRelationship,
    });

    // Show the simulation message
    alert(`You have successfully registered! Your ZKP number is: ${zkpNumber}. Go to the verification page.`);
    
    // Show the document with the form details
    setShowDocument(true);
  };

  // Add identification field
  const addIdentification = () => {
    setIdentifications([...identifications, { type: '', document: null }]);
  };

  return (
    <div className="formation sm:w-full max-w-5xl mx-auto p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[250px]">
            <label htmlFor="name" className="block text-lg mb-2">First Name</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 p-2 bg-gray-700 rounded text-white"
                placeholder="ENTER YOUR FIRST NAME"
              />
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
              />
            </div>
          </div>

          <div className="flex-1 min-w-[250px]">
            <label htmlFor="surname" className="block text-lg mb-2">Last Name</label>
            <div className="relative">
              <input
                type="text"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-full pl-10 p-2 bg-gray-700 rounded text-white"
                placeholder="ENTER YOUR LAST NAME"
              />
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
              />
            </div>
          </div>

          <div className="flex-1 min-w-[250px]">
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-2 bg-gray-700 rounded text-white"
                placeholder="ENTER YOUR EMAIL"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-lg mb-2">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nationality" className="block text-lg mb-2">Nationality</label>
          <input
            type="text"
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-white"
            placeholder="ENTER YOUR NATIONALITY"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-lg mb-2">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-white"
            placeholder="ENTER YOUR PHONE NUMBER"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Identification</h3>
          {identifications.map((identification, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
              <select
                className="w-full sm:w-auto p-2 bg-gray-700 text-white rounded mb-2 sm:mb-0"
                value={identification.type}
                onChange={(e) => {
                  const newIdentifications = [...identifications];
                  newIdentifications[index].type = e.target.value;
                  setIdentifications(newIdentifications);
                }}
              >
                <option value="">Select Identification</option>
                <option value="passport">Passport</option>
                <option value="license">License</option>
                <option value="birth_certificate">Birth Certificate</option>
              </select>
              <input
                type="file"
                onChange={(e) => {
                  const newIdentifications = [...identifications];
                  newIdentifications[index].document = e.target.files[0];
                  setIdentifications(newIdentifications);
                }}
                className="ml-0 sm:ml-2 p-2 bg-gray-700 text-white rounded mb-2 sm:mb-0"
              />
              <button
                type="button"
                onClick={() => {
                  const newIdentifications = identifications.filter((_, i) => i !== index);
                  setIdentifications(newIdentifications);
                }}
                className="w-full sm:w-auto p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIdentification}
            className="w-full p-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Add Another Identification
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Next of Kin</h3>
          <input
            type="text"
            value={kinName}
            onChange={(e) => setKinName(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-white"
            placeholder="Kin Name"
          />
          <input
            type="text"
            value={kinPhone}
            onChange={(e) => setKinPhone(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-white mt-2"
            placeholder="Kin Phone Number"
          />
          <input
            type="text"
            value={kinRelationship}
            onChange={(e) => setKinRelationship(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-white mt-2"
            placeholder="Relationship with Applicant"
          />
        </div>

        <div className="mb-4 border-2 border-blue-500">
          <Camera />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>

      {/* Fake Document Display */}
      {showDocument && (
        <div className="mt-8 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Registration Details</h2>
          <p><strong>Name:</strong> {name} {surname}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Date of Birth:</strong> {dob}</p>
          <p><strong>Nationality:</strong> {nationality}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>ZKP Number:</strong> {zkpNumber}</p>
        </div>
      )}
    </div>
  );
};

export default Register;

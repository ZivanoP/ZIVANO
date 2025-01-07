import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShieldHalved, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faGear, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser as faCircleUserRegular } from '@fortawesome/free-regular-svg-icons';


const About = () => {
  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold  mb-2">About Us</h1>
        <p className="text-gray-400">
          Empowering privacy and decentralization through cutting-edge technology.
        </p>
      </header>

      {/* Mission Section */}
      <section className="mb-8 p-4 rounded shadow bg-gray-800 border-4 border-blue-500">
  <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
  <p className="text-gray-300 text-lg leading-relaxed text-center">
    We aim to revolutionize digital identity and privacy by leveraging
    decentralized technology and zero-knowledge proofs (ZKP). Our mission is
    to give users full control over their data while ensuring unmatched
    security and transparency.
  </p>
  <div className="flex justify-center mt-6 space-x-6">
    <FontAwesomeIcon icon={faUser} className="text-blue-400 text-6xl" />
    <FontAwesomeIcon icon={faShieldHalved} className="text-blue-400 text-6xl" />
    <FontAwesomeIcon icon={faReceipt} className="text-blue-400 text-6xl" />
  </div>
</section>


      {/* Technology Section */}
      <section className="mb-8 p-6 rounded shadow bg-gray-800 border-4 border-blue-500">
  <h2 className="text-2xl font-bold mb-4 text-center">The Technology</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-xl font-semibold mb-2">Iden3 Technology</h3>
      <FontAwesomeIcon icon={faGear} className="text-blue-400 text-6xl py-6" />
      <p className="text-gray-300 leading-relaxed flex items-center gap-2">
        
        Built on the foundation of blockchain, Iden3 uses self-sovereign identity (SSI) to
        ensure privacy without compromising security. This enables users to
        verify their identities without exposing sensitive information.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Zero-Knowledge Proofs (ZKP)</h3>
      <FontAwesomeIcon icon={faCircleUser} className="text-blue-400 text-6xl py-6" />
      <FontAwesomeIcon icon={faCircleUserRegular} className="text-blue-400 text-6xl py-6" />
      <p className="text-gray-300 leading-relaxed flex items-center gap-2">
        ZKPs are at the core of our technology, allowing data to be validated without
        revealing its contents. This ensures privacy, integrity, and trust across
        every interaction.
      </p>
    </div>
  </div>
</section>

      {/* Platform Benefits Section */}
      <section className="mb-8 p-6 rounded-lg shadow-lg bg-gray-800 border-4 border-blue-500 relative">
  <div className="absolute inset-0 rounded-lg border border-blue-400 animate-pulse opacity-60 pointer-events-none"></div>
  <h2 className="text-2xl font-bold mb-4 text-center text-white">Why Choose Us?</h2>
  <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed">
    <li>Complete data ownership and control.</li>
    <li>Unparalleled privacy through ZKP technology.</li>
    <li>Secure and seamless user experiences.</li>
    <li>Decentralized and trustless interactions.</li>
  </ul>
</section>


      {/* Cool Interactive Section */}
      <section className="mb-8 p-6 rounded-lg shadow-lg bg-gray-800 border-4 border-blue-500 relative">
  <div className="absolute inset-0 rounded-lg border border-blue-400 animate-pulse opacity-60 pointer-events-none"></div>
  <h2 className="text-2xl font-bold mb-4 text-center text-white">How Does It Work?</h2>
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="flex-1 text-gray-300">
      <p className="mb-4">
        Imagine verifying your age without revealing your date of birth or proving
        ownership without sharing your private data. That’s the magic of
        zero-knowledge proofs and decentralized identity.
      </p>
      <p>
        Our platform bridges the gap between privacy and functionality, offering
        secure solutions for KYC, data sharing, and more.
      </p>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-6">
  <div className="flex-1">
    <img
      src="/pics/8.png"
      alt="Zero Knowledge Flow"
      className="rounded-lg shadow-lg w-full max-w-xs h-auto mx-auto"
    />
  </div>
  <div className="flex-1">
    <img
      src="/pics/9.png"
      alt="Another "
      className="rounded-lg shadow-lg w-full max-w-xs h-auto mx-auto"
    />
  </div>
</div>

  </div>
</section>


      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500">
        <p>
          Transforming digital identity through technology. <br />
          <span className="text-blue-400">Privacy. Security. Decentralization.</span>
        </p>
      </footer>
    </div>
  );
};

export default About;

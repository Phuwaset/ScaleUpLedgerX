import React from 'react';
import logo from '../assest/logo_.jpg';  // import logo
import { Link } from 'react-router-dom'; // rounting part


const WelcomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen animate-gradient">
      <div className="text-center">
        {/* ใส่โลโก้ด้านบนของข้อความต้อนรับ */}
        <img src={logo} alt="ScaleUp POS Logo" className="mx-auto mb-6 w-32 h-32 object-contain animate-fade-in-up animate-bounce-up-down" />

        <h2 className="text-5xl font-bold text-white animate-fade-in-up mb-6 font-pacifico">
          Welcome to ScaleUp LedgerX
        </h2>
        <p className="text-xl text-gray-200 animate-fade-in-down mb-6 font-barlow-condensed">
          Manage your business efficiently with our POS system
        </p>
        <Link to="/business-selection" className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 space-x-6">
          Get Started
        </Link>
        
        <Link to="/about" className="bg-transparent text-white px-6 py-3 border border-white rounded-lg transform transition duration-500 hover:bg-white hover:text-blue-500">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const BusinessSelection = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Select Your Business Type</h1>
        <div className="space-y-4">
          <Link to="/restaurant-fashion" className="bg-white text-blue-500 px-8 py-4 rounded-lg shadow-lg block transform transition duration-500 hover:scale-110">
            Restaurant & Fashion Store
          </Link>
          <Link to="/ecommerce" className="bg-white text-blue-500 px-8 py-4 rounded-lg shadow-lg block transform transition duration-500 hover:scale-110">
            e-Commerce Business
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessSelection;

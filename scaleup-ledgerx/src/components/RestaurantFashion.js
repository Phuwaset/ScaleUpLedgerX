import React, { useState } from 'react';
import axios from 'axios';

const RestaurantFashion = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    product: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ส่งข้อมูลไปยัง backend (ตัวอย่างเป็น http://localhost:5000/api/form)
    axios.post('http://localhost:5000/api/form', formData)
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully");
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-yellow-500 to-red-500">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Restaurant & Fashion Store POS</h1>

        {/* Input for Business Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter business name"
            required
          />
        </div>

        {/* Input for Business Type */}
        <div className="mb-4">
          <label className="block text-gray-700">Business Type</label>
          <input
            type="text"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter business type"
            required
          />
        </div>

        {/* Input for Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Input for Price */}
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter price"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RestaurantFashion;

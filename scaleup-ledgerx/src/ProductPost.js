import React from 'react';

const ProductPost = ({ product }) => {
  return (
    <div className="max-w-lg mx-auto my-6 p-4 bg-white rounded shadow">
      <img src={URL.createObjectURL(product.image)} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-xl font-semibold text-gray-800 mb-2">${product.price}</p>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
};

export default ProductPost;

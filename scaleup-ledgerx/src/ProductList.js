import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductPost from './ProductPost';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="container mx-auto">
      <ProductForm addProduct={addProduct} />
      {products.length > 0 && (
        <div className="mt-6">
          {products.map((product, index) => (
            <ProductPost key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

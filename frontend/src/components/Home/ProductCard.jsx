import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
            NEW
          </span>
        )}
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
          -{product.discount}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        {product.storage && (
          <p className="text-sm text-gray-600 mb-2">{product.storage}</p>
        )}
        {product.type && (
          <p className="text-sm text-blue-600 mb-2 font-medium">{product.type}</p>
        )}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-blue-600">{product.price}</span>
          <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 
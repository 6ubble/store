import React from 'react';
import { brands } from '../../utils/data';

const Brands = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные бренды</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors cursor-pointer shadow-sm">
              <div className="text-lg font-bold text-gray-700">{brand}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands; 
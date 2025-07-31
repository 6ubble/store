import React from 'react';
import { categories } from '../../utils/data';

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Категории товаров</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 
import React from 'react';
import { accessories } from '../../utils/data';
import ProductCard from './ProductCard';

const Accessories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Чехлы и стекла</h2>
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            Смотреть все →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories; 
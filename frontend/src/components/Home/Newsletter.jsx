import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h2>
        <p className="text-xl mb-8 text-blue-100">
          Получайте первыми информацию о новых iPhone и специальных предложениях
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Ваш email" 
            className="flex-1 px-4 py-3 rounded-lg text-black"
          />
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            Подписаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 
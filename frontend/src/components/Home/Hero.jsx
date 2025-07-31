import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              iPhone 15 Pro
              <span className="block text-yellow-300">+ аксессуары</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Официальные iPhone и качественные чехлы со стеклами. Гарантия Apple на все товары
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Смотреть iPhone
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Чехлы и стекла
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://via.placeholder.com/500x400/FFFFFF/007AFF?text=iPhone+15+Pro+Max" 
              alt="iPhone 15 Pro Max" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
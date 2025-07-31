import React from 'react';
import Hero from '../../components/Hero/Hero';
import Categories from '../../components/Categories/Categories';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Accessories from '../../components/Accessories/Accessories';
import Brands from '../../components/Brands/Brands';
import Features from '../../components/Features/Features';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Accessories />
      <Brands />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;

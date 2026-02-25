import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedHomestays from '../components/home/FeaturedHomestays';
import PopularDestinations from '../components/home/PopularDestinations';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedHomestays />
      <PopularDestinations />
      <Testimonials />
    </div>
  );
};

export default HomePage;
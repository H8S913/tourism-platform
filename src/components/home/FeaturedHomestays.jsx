import React from 'react';
import { motion } from 'framer-motion';
import HomestayCard from '../cards/HomestayCard';
import { homestays } from '../../data/dummyData';

const FeaturedHomestays = () => {
  const featured = homestays.slice(0, 3);

  return (
    <section style={{ 
      padding: '80px 0',
      background: 'linear-gradient(to bottom, white, #F0F9FF)'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Featured Homestays
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
            Hand-picked accommodations for your perfect stay
          </p>
        </motion.div>

        <div className="grid grid-3">
          {featured.map((homestay, index) => (
            <motion.div
              key={homestay.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <HomestayCard homestay={homestay} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHomestays;
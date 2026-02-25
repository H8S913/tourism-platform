import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero">
      <div 
        className="hero-background"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80")'
        }}
      >
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Discover Your Perfect
          <span style={{ color: '#0EA5E9', display: 'block' }}>Home Away From Home</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Explore unique homestays and experiences across India
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-search"
        >
          <div style={{ flex: 1, position: 'relative' }}>
            <FaMapMarkerAlt style={{ 
              position: 'absolute', 
              left: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#9CA3AF'
            }} />
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="hero-search-input"
              style={{ paddingLeft: '40px' }}
            />
          </div>
          <button className="hero-search-button">
            <FaSearch style={{ marginRight: '8px' }} />
            Search
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2
        }}
      >
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid white',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: 'white',
            borderRadius: '2px',
            marginTop: '8px'
          }} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
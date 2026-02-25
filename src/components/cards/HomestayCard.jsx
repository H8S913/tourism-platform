import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaBed, FaUsers } from 'react-icons/fa';

const HomestayCard = ({ homestay }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card"
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={homestay.image}
          alt={homestay.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontWeight: 'bold',
          color: '#0EA5E9'
        }}>
          ${homestay.price}/night
        </div>
      </div>

      <div style={{ padding: '1.5rem', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{homestay.title}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <FaStar color="#FFD700" />
            <span>{homestay.rating}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
          <FaMapMarkerAlt color="#0EA5E9" />
          <span style={{ fontSize: '0.875rem' }}>{homestay.location}</span>
        </div>

        <p style={{ 
          color: '#6B7280', 
          fontSize: '0.875rem', 
          marginBottom: '1rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {homestay.description}
        </p>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <FaBed />
              <span>{homestay.bedrooms} beds</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <FaUsers />
              <span>{homestay.guests} guests</span>
            </div>
          </div>
          <span style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>
            {homestay.reviews} reviews
          </span>
        </div>

        <Link to={`/homestay/${homestay.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Book Now
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default HomestayCard;
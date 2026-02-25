import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaTimes, FaClock, FaMoneyBillWave } from 'react-icons/fa';

const AttractionModal = ({ attraction, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '600px' }}
      >
        <div className="modal-header">
          <h2 className="modal-title">{attraction.name}</h2>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <img
          src={attraction.image}
          alt={attraction.name}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '0.5rem',
            marginBottom: '1rem'
          }}
        />

        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <FaMapMarkerAlt color="#0EA5E9" />
              <span>{attraction.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <FaStar color="#FFD700" />
              <span>{attraction.rating}</span>
            </div>
          </div>
        </div>

        <p style={{ color: '#4B5563', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {attraction.description}
        </p>

        <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <FaMoneyBillWave color="#0EA5E9" />
              <h3 style={{ fontWeight: 'bold' }}>Entry Fee</h3>
            </div>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${attraction.entryFee}</p>
          </div>

          <div className="card" style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <FaClock color="#0EA5E9" />
              <h3 style={{ fontWeight: 'bold' }}>Best Time</h3>
            </div>
            <p>{attraction.bestTime}</p>
          </div>
        </div>

        <div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Travel Tips</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {attraction.tips.map((tip, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                padding: '0.5rem',
                background: '#F9FAFB',
                borderRadius: '0.5rem'
              }}>
                <span style={{ color: '#0EA5E9' }}>•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AttractionModal;
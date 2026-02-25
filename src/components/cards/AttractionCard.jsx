import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import AttractionModal from "../modals/AttractionModal";

const AttractionCard = ({ attraction }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        className="card"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
          <img
            src={attraction.image}
            alt={attraction.name}
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
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <FaStar color="#FFD700" />
            <span>{attraction.rating}</span>
          </div>
        </div>

        <div style={{ padding: '1.5rem', flex: 1 }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {attraction.name}
          </h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
            <FaMapMarkerAlt color="#0EA5E9" />
            <span style={{ fontSize: '0.875rem' }}>{attraction.location}</span>
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
            {attraction.description}
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Entry Fee</span>
              <p style={{ fontWeight: 'bold', color: '#0EA5E9' }}>${attraction.entryFee}</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#0EA5E9',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.875rem'
              }}
            >
              <FaInfoCircle />
              View Details
            </button>
          </div>
        </div>
      </motion.div>

      {showModal && (
        <AttractionModal
          attraction={attraction}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default AttractionCard;
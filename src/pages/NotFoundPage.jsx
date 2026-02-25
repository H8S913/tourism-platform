import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 1rem',
      background: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
        style={{
          maxWidth: '500px',
          width: '100%',
          padding: '3rem 2rem',
          textAlign: 'center'
        }}
      >
        <h1 style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#0EA5E9',
          marginBottom: '1rem',
          lineHeight: 1
        }}>
          404
        </h1>
        
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Page Not Found
        </h2>
        
        <p style={{
          color: '#6B7280',
          marginBottom: '2rem',
          fontSize: '1.125rem'
        }}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FaHome />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/dummyData';

const Testimonials = () => {
  return (
    <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            What Travelers Say
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
            Real experiences from our community
          </p>
        </motion.div>

        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
              style={{ padding: '2rem', position: 'relative' }}
            >
              <FaQuoteLeft style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '3rem',
                color: '#0EA5E9',
                opacity: 0.2
              }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <h3 style={{ fontWeight: 'bold' }}>{testimonial.name}</h3>
                  <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>{testimonial.role}</p>
                </div>
              </div>

              <p style={{ color: '#4B5563', marginBottom: '1rem', lineHeight: '1.6' }}>
                {testimonial.content}
              </p>

              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < testimonial.rating ? '#FFD700' : '#E5E7EB'}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      properties: 45
    },
    {
      id: 2,
      name: 'Manali',
      image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3c201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      properties: 32
    },
    {
      id: 3,
      name: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      properties: 28
    },
    {
      id: 4,
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      properties: 56
    }
  ];

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Popular Destinations
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
            Most sought-after locations by travelers
          </p>
        </motion.div>

        <div className="grid grid-4">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card"
              style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
            >
              <img
                src={destination.image}
                alt={destination.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                color: 'white',
                padding: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                  {destination.name}
                </h3>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <FaMapMarkerAlt />
                  {destination.properties} properties
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
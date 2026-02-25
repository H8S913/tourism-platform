import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import AttractionCard from '../components/cards/AttractionCard';
import { attractions } from '../data/dummyData';

const AttractionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = [...new Set(attractions.map(a => a.location.split(',')[1]?.trim() || 'India'))];

  const filteredAttractions = attractions.filter(attraction => 
    attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedLocation === '' || attraction.location.includes(selectedLocation))
  );

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>
            Tourist Attractions
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', textAlign: 'center', marginBottom: '3rem' }}>
            Discover amazing places to visit across India
          </p>

          {/* Search and Filter */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <FaSearch style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9CA3AF'
              }} />
              <input
                type="text"
                placeholder="Search attractions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="form-input"
              style={{ width: '200px' }}
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-3">
            {filteredAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AttractionCard attraction={attraction} />
              </motion.div>
            ))}
          </div>

          {filteredAttractions.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: '#6B7280' }}>No attractions found matching your criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AttractionsPage;
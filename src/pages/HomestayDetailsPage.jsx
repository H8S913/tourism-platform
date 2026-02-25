import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaBed, FaUsers, FaWifi, FaParking, FaUtensils, FaSwimmer } from 'react-icons/fa';
import { homestays } from '../data/dummyData';

const HomestayDetailsPage = () => {
  const { id } = useParams();
  const homestay = homestays.find(h => h.id === parseInt(id));

  if (!homestay) {
    return <div>Homestay not found</div>;
  }

  const amenityIcons = {
    WiFi: FaWifi,
    Pool: FaSwimmer,
    Kitchen: FaUtensils,
    Parking: FaParking,
    AC: FaWifi,
    Fireplace: FaWifi,
    Restaurant: FaUtensils,
    Spa: FaSwimmer,
    Garden: FaParking
  };

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Gallery */}
          <div style={{ marginBottom: '2rem' }}>
            <img
              src={homestay.image}
              alt={homestay.title}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '1rem'
              }}
            />
          </div>

          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {/* Left Column - Details */}
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {homestay.title}
              </h1>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <FaMapMarkerAlt color="#0EA5E9" />
                  <span>{homestay.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <FaStar color="#FFD700" />
                  <span>{homestay.rating} ({homestay.reviews} reviews)</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <FaBed color="#6B7280" />
                  <span style={{ marginLeft: '0.5rem' }}>{homestay.bedrooms} Bedrooms</span>
                </div>
                <div>
                  <FaUsers color="#6B7280" />
                  <span style={{ marginLeft: '0.5rem' }}>Up to {homestay.guests} guests</span>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  About this homestay
                </h2>
                <p style={{ color: '#4B5563', lineHeight: '1.8' }}>
                  {homestay.description}
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Amenities
                </h2>
                <div className="grid grid-2" style={{ gap: '1rem' }}>
                  {homestay.amenities.map((amenity, index) => {
                    const Icon = amenityIcons[amenity] || FaWifi;
                    return (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon color="#0EA5E9" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div>
              <div className="card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  ${homestay.price} <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#6B7280' }}>/ night</span>
                </h2>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Check-in</label>
                  <input type="date" className="form-input" />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Check-out</label>
                  <input type="date" className="form-input" />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Guests</label>
                  <select className="form-input">
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <Link to={`/booking/${homestay.id}`}>
                  <button className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                    Reserve Now
                  </button>
                </Link>

                <p style={{ textAlign: 'center', color: '#6B7280', fontSize: '0.875rem' }}>
                  You won't be charged yet
                </p>

                <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>${homestay.price} x 5 nights</span>
                  <span>${homestay.price * 5}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Service fee</span>
                  <span>$45</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '1rem' }}>
                  <span>Total</span>
                  <span>${homestay.price * 5 + 45}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomestayDetailsPage;
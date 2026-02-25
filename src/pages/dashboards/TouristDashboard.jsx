import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaCalendarCheck, 
  FaStar, 
  FaMapMarkerAlt,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { homestays } from '../../data/dummyData';

const TouristDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedRating, setSelectedRating] = useState(0);

  const wishlist = homestays.slice(0, 2);
  const bookings = homestays.slice(0, 3).map((h, index) => ({
    ...h,
    checkIn: '2024-03-15',
    checkOut: '2024-03-20',
    status: index === 0 ? 'confirmed' : 'pending'
  }));

  const filteredHomestays = homestays.filter(h => 
    h.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    h.price >= priceRange[0] && h.price <= priceRange[1] &&
    h.rating >= selectedRating
  );

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div style={{ padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Profile"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ fontWeight: 'bold' }}>{user?.name}</h3>
            <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Traveler</p>
          </div>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('search')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'search' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'search' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FaSearch />
              Search Stays
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'bookings' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'bookings' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FaCalendarCheck />
              My Bookings
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'wishlist' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'wishlist' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FaHeart />
              Wishlist
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {activeTab === 'search' && (
          <>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Find Your Perfect Stay
              </h1>
              
              {/* Search Bar */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
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
                    placeholder="Search by homestay name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
                <button className="btn btn-primary">
                  <FaFilter style={{ marginRight: '0.5rem' }} />
                  Filters
                </button>
              </div>

              {/* Filters */}
              <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Filters</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Price Range</label>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      style={{ width: '100%' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Minimum Rating</label>
                    <select
                      value={selectedRating}
                      onChange={(e) => setSelectedRating(parseFloat(e.target.value))}
                      className="form-input"
                    >
                 <option value="0">Any</option>
                      <option value="3">3+ Stars</option>
                      <option value="4">4+ Stars</option>
                      <option value="4.5">4.5+ Stars</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Results */}
              <div className="grid grid-3">
                {filteredHomestays.map((homestay, index) => (
                  <motion.div
                    key={homestay.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="card">
                      <img
                        src={homestay.image}
                        alt={homestay.title}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <h3 style={{ fontWeight: 'bold' }}>{homestay.title}</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <FaStar color="#FFD700" />
                            <span>{homestay.rating}</span>
                          </div>
                        </div>
                        <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                          {homestay.location}
                        </p>
                        <p style={{ fontWeight: 'bold', color: '#0EA5E9' }}>
                          ${homestay.price} <span style={{ fontWeight: 'normal', color: '#6B7280' }}>/ night</span>
                        </p>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'bookings' && (
          <>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              My Bookings
            </h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {bookings.map((booking) => (
                <div key={booking.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <img
                      src={booking.image}
                      alt={booking.title}
                      style={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'cover',
                        borderRadius: '0.5rem'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{booking.title}</h3>
                        <span style={{
                          background: booking.status === 'confirmed' ? '#D1FAE5' : '#FEF3C7',
                          color: booking.status === 'confirmed' ? '#065F46' : '#92400E',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.875rem'
                        }}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                      <p style={{ color: '#6B7280', marginBottom: '0.5rem' }}>{booking.location}</p>
                      <div style={{ display: 'flex', gap: '2rem', marginBottom: '0.5rem' }}>
                        <div>
                          <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Check-in</span>
                          <p style={{ fontWeight: '500' }}>{booking.checkIn}</p>
                        </div>
                        <div>
                          <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Check-out</span>
                          <p style={{ fontWeight: '500' }}>{booking.checkOut}</p>
                        </div>
                      </div>
                      <p style={{ fontWeight: 'bold', color: '#0EA5E9' }}>
                        Total: ${booking.price * 5}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'wishlist' && (
          <>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              My Wishlist
            </h1>
            
            <div className="grid grid-3">
              {wishlist.map((item) => (
                <div key={item.id} className="card">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontWeight: 'bold' }}>{item.title}</h3>
                      <FaHeart color="#EF4444" />
                    </div>
                    <p style={{ color: '#6B7280', marginBottom: '0.5rem' }}>{item.location}</p>
                    <p style={{ fontWeight: 'bold', color: '#0EA5E9' }}>
                      ${item.price} <span style={{ fontWeight: 'normal', color: '#6B7280' }}>/ night</span>
                    </p>
                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TouristDashboard;
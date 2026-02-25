import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaMoneyBillWave,
  FaCalendarCheck,
  FaComment
} from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { homestays } from '../../data/dummyData';

const HostDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('listings');
  const [showAddForm, setShowAddForm] = useState(false);

  const myListings = homestays.slice(0, 3);
  const bookings = homestays.slice(0, 2).map((h, index) => ({
    ...h,
    guest: 'John Smith',
    checkIn: '2024-03-15',
    checkOut: '2024-03-20',
    status: index === 0 ? 'confirmed' : 'pending'
  }));

  const earnings = {
    total: 3450,
    monthly: 1250,
    pending: 450
  };

  const messages = [
    { id: 1, from: 'Alice Johnson', message: 'Is the property available for...', time: '2 hours ago' },
    { id: 2, from: 'Bob Williams', message: 'I have a question about check-in...', time: '5 hours ago' }
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div style={{ padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ fontWeight: 'bold' }}>{user?.name}</h3>
            <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Homestay Host</p>
          </div>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('listings')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'listings' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'listings' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FaHome />
              My Listings
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
              Bookings
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'earnings' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'earnings' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FaMoneyBillWave />
              Earnings
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'messages' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'messages' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FaComment />
              Messages
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {activeTab === 'listings' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>My Listings</h1>
              <button 
                className="btn btn-primary"
                onClick={() => setShowAddForm(!showAddForm)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FaPlus />
                Add New Listing
              </button>
            </div>

            {showAddForm && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card"
                style={{ padding: '2rem', marginBottom: '2rem' }}
              >
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Add New Homestay
                </h2>
                <form>
                  <div className="grid grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Title</label>
                      <input type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Location</label>
                      <input type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Price per night</label>
                      <input type="number" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Bedrooms</label>
                      <input type="number" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Bathrooms</label>
                      <input type="number" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Max Guests</label>
                      <input type="number" className="form-input" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea className="form-input" rows="4"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Images</label>
                    <input type="file" multiple className="form-input" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Listing
                  </button>
                </form>
              </motion.div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {myListings.map((listing) => (
                <div key={listing.id} className="card" style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <img
                      src={listing.image}
                      alt={listing.title}
                      style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '0.5rem'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{listing.title}</h3>
                        <div>
                          <button style={{ background: 'none', border: 'none', color: '#0EA5E9', cursor: 'pointer', marginRight: '0.5rem' }}>
                            <FaEdit size={18} />
                          </button>
                          <button style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer' }}>
                            <FaTrash size={18} />
                          </button>
                        </div>
                      </div>
                      <p style={{ color: '#6B7280', marginBottom: '0.5rem' }}>{listing.location}</p>
                      <p style={{ fontWeight: 'bold', color: '#0EA5E9', marginBottom: '0.5rem' }}>
                        ${listing.price}/night
                      </p>
                      <div style={{ display: 'flex', gap: '2rem' }}>
                        <span>{listing.bedrooms} bedrooms</span>
                        <span>{listing.bathrooms} bathrooms</span>
                        <span>Max {listing.guests} guests</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'bookings' && (
          <>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Booking Requests
            </h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {bookings.map((booking) => (
                <div key={booking.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{booking.title}</h3>
                    <span style={{
                      background: booking.status === 'confirmed' ? '#D1FAE5' : '#FEF3C7',
                      color: booking.status === 'confirmed' ? '#065F46' : '#92400E',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem'
                    }}>
                      {booking.status}
                    </span>
                  </div>
                  <p><strong>Guest:</strong> {booking.guest}</p>
                  <p><strong>Check-in:</strong> {booking.checkIn}</p>
                  <p><strong>Check-out:</strong> {booking.checkOut}</p>
                  <p><strong>Total:</strong> ${booking.price * 5}</p>
                  {booking.status === 'pending' && (
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                      <button className="btn btn-primary">Accept</button>
                      <button className="btn btn-secondary">Decline</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'earnings' && (
          <>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Earnings Overview
            </h1>

            <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
              <div className="stats-card">
                <div className="stats-icon primary">
                  <FaMoneyBillWave />
                </div>
                <div className="stats-content">
                  <div className="stats-label">Total Earnings</div>
                  <div className="stats-value">${earnings.total}</div>
                </div>
              </div>
              <div className="stats-card">
                <div className="stats-icon secondary">
                  <FaMoneyBillWave />
                </div>
                <div className="stats-content">
                  <div className="stats-label">This Month</div>
                  <div className="stats-value">${earnings.monthly}</div>
                </div>
              </div>
              <div className="stats-card">
                <div className="stats-icon accent">
                  <FaMoneyBillWave />
                </div>
                <div className="stats-content">
                  <div className="stats-label">Pending</div>
                  <div className="stats-value">${earnings.pending}</div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Transaction History
              </h2>
              <table style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Date</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Booking</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Amount</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.5rem' }}>Mar 15, 2024</td>
                    <td style={{ padding: '0.5rem' }}>Beachfront Villa</td>
                    <td style={{ padding: '0.5rem' }}>$445</td>
                    <td style={{ padding: '0.5rem' }}>Completed</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem' }}>Mar 10, 2024</td>
                    <td style={{ padding: '0.5rem' }}>Mountain Cottage</td>
                    <td style={{ padding: '0.5rem' }}>$325</td>
                    <td style={{ padding: '0.5rem' }}>Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'messages' && (
          <>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Messages
            </h1>

            <div className="card" style={{ padding: '1rem' }}>
              {messages.map((msg) => (
                <div key={msg.id} style={{
                  padding: '1rem',
                  borderBottom: '1px solid #E5E7EB',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 style={{ fontWeight: 'bold' }}>{msg.from}</h3>
                    <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>{msg.time}</span>
                  </div>
                  <p style={{ color: '#6B7280' }}>{msg.message}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HostDashboard;
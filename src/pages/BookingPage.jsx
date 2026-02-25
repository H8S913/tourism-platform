import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCreditCard } from 'react-icons/fa';
import { homestays } from '../data/dummyData';

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const homestay = homestays.find(h => h.id === parseInt(id));
  const [bookingComplete, setBookingComplete] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingComplete(true);
    setTimeout(() => {
      navigate('/tourist-dashboard');
    }, 3000);
  };

  if (!homestay) {
    return <div>Homestay not found</div>;
  }

  if (bookingComplete) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 1rem'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card"
          style={{ padding: '3rem', textAlign: 'center', maxWidth: '500px' }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            background: '#10B981',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem',
            color: 'white',
            fontSize: '2.5rem'
          }}>
            ✓
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Booking Confirmed!
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '1rem' }}>
            Your booking has been successfully confirmed. A confirmation email has been sent to your email address.
          </p>
          <p style={{ color: '#6B7280' }}>
            Redirecting to dashboard...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Complete Your Booking
          </h1>

          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {/* Booking Form */}
            <div>
              <div className="card" style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                  Personal Information
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">
                      <FaUser style={{ marginRight: '0.5rem' }} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <FaEnvelope style={{ marginRight: '0.5rem' }} />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <FaPhone style={{ marginRight: '0.5rem' }} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '2rem 0 1.5rem' }}>
                    Booking Details
                  </h2>

                  <div className="grid grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Check-in Date</label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Check-out Date</label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="form-input"
                      rows="4"
                      placeholder="Any special requirements or requests?"
                    />
                  </div>

                  <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '2rem 0 1.5rem' }}>
                    Payment Information
                  </h2>

                  <div className="form-group">
                    <label className="form-label">
                      <FaCreditCard style={{ marginRight: '0.5rem' }} />
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>

                  <div className="grid grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Expiry Date</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">CVV</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>

            {/* Booking Summary */}
            <div>
              <div className="card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                  Booking Summary
                </h2>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <img
                    src={homestay.image}
                    alt={homestay.title}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <div>
                    <h3 style={{ fontWeight: 'bold' }}>{homestay.title}</h3>
                    <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>{homestay.location}</p>
                    <p style={{ color: '#0EA5E9', fontWeight: 'bold' }}>${homestay.price}/night</p>
                  </div>
                </div>

                <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>${homestay.price} x 5 nights</span>
                    <span>${homestay.price * 5}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Cleaning fee</span>
                    <span>$25</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Service fee</span>
                    <span>$45</span>
                  </div>
                </div>

                <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.25rem' }}>
                  <span>Total</span>
                  <span>${homestay.price * 5 + 70}</span>
                </div>

                <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#F9FAFB', borderRadius: '0.5rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                    Free cancellation within 48 hours. Review the host's cancellation policy for more details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;
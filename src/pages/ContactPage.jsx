import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+91 123 456 7890',
      subdetails: 'Mon-Fri 9am-6pm'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'support@travelstay.com',
      subdetails: '24/7 Support'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Office',
      details: 'Mumbai, India',
      subdetails: 'Visit us anytime'
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: '9:00 AM - 6:00 PM',
      subdetails: 'Monday to Friday'
    }
  ];

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #14B8A6 0%, #0EA5E9 100%)',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Get in touch with us for any questions or support
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="grid grid-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
                style={{ padding: '2rem', textAlign: 'center' }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(14, 165, 233, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: '#0EA5E9',
                  fontSize: '1.5rem'
                }}>
                  <info.icon />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {info.title}
                </h3>
                <p style={{ color: '#0EA5E9', fontWeight: '500' }}>{info.details}</p>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>{info.subdetails}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section style={{ padding: '60px 0', background: '#F9FAFB' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                Send us a Message
              </h2>
              
              {submitted && (
                <div style={{
                  background: '#D1FAE5',
                  color: '#065F46',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
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
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                Find Us
              </h2>
              <div className="card" style={{ padding: '1rem', height: '400px' }}>
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.672928773!2d72.71643341843333!3d19.082522320190863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="card"
                style={{ padding: '1.5rem' }}
              >
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  How do I book a homestay?
                </h3>
                <p style={{ color: '#6B7280' }}>
                  Simply browse our listings, select your preferred homestay, and click the "Book Now" button.
                  Follow the simple checkout process to confirm your booking.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
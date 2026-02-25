import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandsHelping, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: FaHeart,
      title: 'Passion for Travel',
      description: 'We believe in creating memorable experiences for every traveler.'
    },
    {
      icon: FaHandsHelping,
      title: 'Community First',
      description: 'Building strong relationships between hosts and travelers.'
    },
    {
      icon: FaGlobe,
      title: 'Sustainable Tourism',
      description: 'Promoting responsible and sustainable travel practices.'
    },
    {
      icon: FaShieldAlt,
      title: 'Safety & Trust',
      description: 'Ensuring secure and trustworthy bookings for everyone.'
    }
  ];

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}
          >
            About TravelStay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Connecting travelers with authentic homestay experiences across India
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Our Story
              </h2>
              <p style={{ color: '#6B7280', marginBottom: '1rem', lineHeight: '1.8' }}>
                Founded in 2020, TravelStay began with a simple idea: to make unique,
                authentic homestay experiences accessible to every traveler. What started
                as a small platform has now grown into a community of passionate hosts
                and curious travelers.
              </p>
              <p style={{ color: '#6B7280', marginBottom: '1rem', lineHeight: '1.8' }}>
                We believe that the best way to experience a new place is by living like
                a local. Our platform connects you with welcoming hosts who open their
                homes and share their local knowledge, creating unforgettable memories.
              </p>
              <p style={{ color: '#6B7280', lineHeight: '1.8' }}>
                Today, we're proud to be India's fastest-growing homestay platform,
                with thousands of properties and millions of happy travelers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
                style={{
                  width: '100%',
                  borderRadius: '1rem',
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Our Values
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
              What drives us every day
            </p>
          </motion.div>

          <div className="grid grid-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
                style={{ padding: '2rem', textAlign: 'center' }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'rgba(14, 165, 233, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: '#0EA5E9',
                  fontSize: '2rem'
                }}>
                  <value.icon />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#6B7280' }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Meet Our Team
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
              Passionate people behind TravelStay
            </p>
          </motion.div>

          <div className="grid grid-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="card"
                style={{ padding: '2rem', textAlign: 'center' }}
              >
                <img
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`}
                  alt="Team Member"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    objectFit: 'cover'
                  }}
                />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                  {item === 1 ? 'John Doe' : item === 2 ? 'Jane Smith' : 'Mike Johnson'}
                </h3>
                <p style={{ color: '#0EA5E9', marginBottom: '0.5rem' }}>
                  {item === 1 ? 'CEO & Founder' : item === 2 ? 'Head of Operations' : 'Lead Developer'}
                </p>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                  Passionate about creating meaningful travel experiences
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
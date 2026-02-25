import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      const result = login(formData.username, formData.password);
      
      if (result.success) {
        switch(result.user.role) {
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'host':
            navigate('/host-dashboard');
            break;
          case 'tourist':
            navigate('/tourist-dashboard');
            break;
          case 'guide':
            navigate('/guide-dashboard');
            break;
          default:
            navigate('/');
        }
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 1rem 2rem',
      background: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
        style={{
          maxWidth: '400px',
          width: '100%',
          padding: '2rem'
        }}
      >
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#0EA5E9'
        }}>
          Welcome Back
        </h2>

        {error && (
          <div style={{
            background: '#FEE2E2',
            color: '#DC2626',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              <FaUser style={{ marginRight: '0.5rem' }} />
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter username"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FaLock style={{ marginRight: '0.5rem' }} />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter password"
              required
              disabled={loading}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              Demo Credentials:
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              Admin: admin013 / Admin013@
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              Tourist: harsi013 / Harshi013@
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginBottom: '1rem' }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p style={{ textAlign: 'center', color: '#6B7280' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#0EA5E9', textDecoration: 'none' }}>
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
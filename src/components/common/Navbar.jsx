import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaInfoCircle, 
  FaPhone, 
  FaSignInAlt, 
  FaUserPlus,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, logout, darkMode, toggleDarkMode } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowDropdown(false);
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', icon: FaHome, text: 'Home' },
    { to: '/about', icon: FaInfoCircle, text: 'About' },
    { to: '/contact', icon: FaPhone, text: 'Contact' },
  ];

  const getDashboardLink = () => {
    if (!user) return null;
    switch(user.role) {
      case 'admin': return '/admin-dashboard';
      case 'host': return '/host-dashboard';
      case 'tourist': return '/tourist-dashboard';
      case 'guide': return '/guide-dashboard';
      default: return '/';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TravelStay
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              <link.icon />
              <span>{link.text}</span>
            </Link>
          ))}
          
          <button
            onClick={toggleDarkMode}
            className="navbar-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          {user ? (
            <>
              <Link
                to={getDashboardLink()}
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                <FaUserCircle />
                <span>Dashboard</span>
              </Link>
              <button
                onClick={handleLogout}
                className="navbar-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <FaSignInAlt />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                <FaUserPlus />
                <span>Register</span>
              </Link>
            </>
          )}
        </div>

        <div className="navbar-buttons">
          <button
            onClick={toggleDarkMode}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem' }}
          >
            {darkMode ? <FaSun color="#F97316" /> : <FaMoon color="#0EA5E9" />}
          </button>

          {user ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <FaUserCircle size={24} color="#0EA5E9" />
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '40px',
                      background: darkMode ? '#1F2937' : 'white',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '8px 0',
                      minWidth: '150px',
                      zIndex: 1000
                    }}
                  >
                    <Link
                      to={getDashboardLink()}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        color: darkMode ? '#E5E7EB' : '#374151',
                        textDecoration: 'none'
                      }}
                      onClick={() => setShowDropdown(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        background: 'none',
                        border: 'none',
                        color: darkMode ? '#E5E7EB' : '#374151',
                        cursor: 'pointer'
                      }}
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </>
          )}
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
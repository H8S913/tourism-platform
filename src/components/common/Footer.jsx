import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">About TravelStay</h3>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/about">About Us</Link></li>
              <li className="footer-link"><Link to="/contact">Contact</Link></li>
              <li className="footer-link"><Link to="/careers">Careers</Link></li>
              <li className="footer-link"><Link to="/press">Press</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">For Hosts</h3>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/become-host">Become a Host</Link></li>
              <li className="footer-link"><Link to="/hosting-resources">Hosting Resources</Link></li>
              <li className="footer-link"><Link to="/community">Community</Link></li>
              <li className="footer-link"><Link to="/host-guarantee">Host Guarantee</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">For Travelers</h3>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/how-it-works">How It Works</Link></li>
              <li className="footer-link"><Link to="/safety">Safety Tips</Link></li>
              <li className="footer-link"><Link to="/reviews">Reviews</Link></li>
              <li className="footer-link"><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Follow Us</h3>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaYoutube />
              </a>
            </div>
            <p style={{ marginTop: '1rem', color: '#9CA3AF' }}>
              Subscribe to our newsletter for travel tips and offers.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 TravelStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
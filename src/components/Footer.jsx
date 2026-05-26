import { FiFacebook, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid footer-grid-3">
          <div className="footer-brand">
            <h2 className="logo">
              <span className="neon-text-cyan">ZODIAC</span> SIGNS
            </h2>
            <p className="footer-description">
              50 years of excellence in crafting premium signage, 3D LED boards, and sticker art for businesses in Karunagappally and beyond.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          

          
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FiFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zodiac Signs Karunagappally. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

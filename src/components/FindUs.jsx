import { motion } from 'framer-motion';
import { FiPhone, FiMessageCircle, FiMapPin, FiNavigation } from 'react-icons/fi';
import './FindUs.css';

// ✏️ Replace these with the real numbers when ready
const PHONE_NUMBER = 'XXXXXXXXXX';
const WHATSAPP_NUMBER = 'XXXXXXXXXX';

const subCards = [
  {
    id: 'call-us',
    icon: <FiPhone size={28} />,
    title: 'Call Us',
    subtitle: 'Talk to us directly',
    label: 'Tap to Call',
    href: `tel:+91${PHONE_NUMBER}`,
    colorClass: 'sub-card-cyan',
  },
  {
    id: 'chat-whatsapp',
    icon: <FiMessageCircle size={28} />,
    title: 'Chat With Us',
    subtitle: 'WhatsApp us anytime',
    label: 'Open WhatsApp',
    href: `https://wa.me/91${WHATSAPP_NUMBER}`,
    colorClass: 'sub-card-green',
    external: true,
  },
];

const FindUs = () => {
  const mapLink = "https://www.google.com/maps/search/Zodiac+Signs+Karunagappally+Kollam/";

  return (
    <section id="find-us" className="section findus-section">
      <div className="container">
        <motion.div
          className="findus-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Find <span className="neon-text-pink">Us</span>
          </h2>
          <p className="findus-subtitle">
            Visit our workshop in Karunagappally to discuss your next big signage project or get in touch below.
          </p>
        </motion.div>

        <div className="findus-grid">
          {/* Location / Map Section */}
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="map-card glow-box">
              <div className="map-background"></div>
              
              <div className="map-content">
                <motion.div 
                  className="pin-container"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <FiMapPin size={60} className="neon-text-pink map-pin" />
                  <div className="pin-shadow"></div>
                </motion.div>
                
                <div className="map-info">
                  <h3>Zodiac Signs</h3>
                  <p>Karunagappally, Kollam, Kerala</p>
                  <span className="directions-btn">
                    <FiNavigation style={{ marginRight: '8px' }} />
                    Get Directions
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="contact-outer-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="outer-card-glow" />

            <div className="outer-card-header">
              <span className="outer-card-tag">Contact Us</span>
              <p className="outer-card-tagline">Choose how you'd like to reach us</p>
            </div>

            <div className="sub-cards-row">
              {subCards.map((card, index) => (
                <motion.a
                  key={card.id}
                  id={card.id}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className={`sub-card ${card.colorClass}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  whileHover={{ scale: 1.04, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="sub-card-glow" />

                  <div className="sub-card-icon">
                    {card.icon}
                  </div>

                  <div className="sub-card-body">
                    <span className="sub-card-subtitle">{card.subtitle}</span>
                    <h3 className="sub-card-title">{card.title}</h3>
                  </div>

                  <span className="sub-card-cta">
                    {card.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;

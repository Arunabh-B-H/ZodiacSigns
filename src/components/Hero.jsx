import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="glow-orb cyan-orb"></div>
        <div className="glow-orb pink-orb"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            EST. 1991 • KARUNAGAPPALLY
          </motion.p>

          <h1 className="hero-title">
            ILLUMINATING <br /> YOUR <span className="neon-text-cyan">VISION</span>
          </h1>

          <p className="hero-description">
            Premium 3D LED Boards, Signage & Sticker Art.
            Delivering 35 years of unmatched craftsmanship and modern design to make your brand stand out.
          </p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#gallery" className="btn-primary btn-gold">View Gallery</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

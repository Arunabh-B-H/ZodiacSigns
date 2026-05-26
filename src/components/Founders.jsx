import { motion } from 'framer-motion';
import './Founders.css';

const Founders = () => {
  return (
    <section id="founders" className="section founders-section">
      <div className="container">
        <motion.div
          className="founders-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="founders-text">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              The <span className="neon-text-gold">Visionaries</span>
            </h2>
            <h3 className="founders-subtitle">35 Years of Guiding Light</h3>
            <p className="founders-description">
              Our journey began half a century ago under the visionary leadership of our founder, <strong>Saji Kumar</strong>.
              With a passion for art and an eye for innovation, he transformed a humble workshop
              in Karunagappally into the region's premier destination for high-quality signage.
            </p>
            <p className="founders-description">
              His commitment to excellence, integrity, and customer satisfaction remains the
              cornerstone of Zodiac Signs. Today, we continue to honor his legacy by integrating
              modern technology with traditional craftsmanship.
            </p>
            <div className="founders-stats">
              <div className="stat-item">
                <span className="stat-number neon-text-cyan">1991</span>
                <span className="stat-label">Established</span>
              </div>
              <div className="stat-item">
                <span className="stat-number neon-text-gold">10k+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
          </div>

          <div className="founders-image-container">
            <div className="founders-image-wrapper">
              <img
                src="/founder.png"
                alt="Founder Saji Kumar"
                className="founders-img"
              />
              <div className="image-glow"></div>
            </div>
            <div className="founder-name-tag">
              <h3 className="founder-name neon-text-gold">Saji Kumar</h3>
              <p className="founder-title">Founder & Visionary</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;

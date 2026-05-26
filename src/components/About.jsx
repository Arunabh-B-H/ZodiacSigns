import { motion } from 'framer-motion';
import { FiAward, FiClock, FiStar } from 'react-icons/fi';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">A Legacy of <span className="neon-text-gold">35 Years</span></h2>
          <p className="about-subtitle">
            Established in 1991, Zodiac Signs has been the beacon of quality signage in Karunagappally.
            Half a century of trust, innovation, and luminous designs.
          </p>
        </motion.div>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="glow-box about-card" variants={itemVariants}>
            <div className="icon-wrapper">
              <FiClock size={40} className="neon-text-cyan" />
            </div>
            <h3>35 Years Experience</h3>
            <p>Decades of mastery in crafting signs that endure the test of time and trends.</p>
          </motion.div>

          <motion.div className="glow-box about-card" variants={itemVariants}>
            <div className="icon-wrapper">
              <FiStar size={40} className="neon-text-gold" />
            </div>
            <h3>Premium Quality</h3>
            <p>Using only the finest materials and cutting-edge LED technology for unmatched brilliance.</p>
          </motion.div>

          <motion.div className="glow-box about-card" variants={itemVariants}>
            <div className="icon-wrapper">
              <FiAward size={40} className="neon-text-pink" />
            </div>
            <h3>Award Winning</h3>
            <p>Recognized locally as the pioneers and leaders in the signage industry of Kollam.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

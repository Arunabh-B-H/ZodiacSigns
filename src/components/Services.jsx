import { motion } from 'framer-motion';
import { FiMonitor, FiLayout, FiPenTool } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: '3D LED Boards',
      description: 'High-impact, energy-efficient 3D LED signs that make your business visible day and night.',
      icon: <FiMonitor size={40} />,
      colorClass: 'cyan',
      image: '/led-board.png'
    },
    {
      title: 'Sign Board Making',
      description: 'Custom-designed structural sign boards crafted with precision and durable materials.',
      icon: <FiLayout size={40} />,
      colorClass: 'gold',
      image: '/sign-board.png'
    },
    {
      title: 'Sticker Art',
      description: 'Vibrant, high-resolution vinyl stickers and decals for vehicles, windows, and walls.',
      icon: <FiPenTool size={40} />,
      colorClass: 'pink',
      image: '/sticker-art.png'
    }
  ];

  return (
    <section id="works" className="section services-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="neon-text-cyan">Services</span>
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`glow-box service-card service-${service.colorClass}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="image-overlay"></div>
                <div className={`service-icon neon-text-${service.colorClass}`}>
                  {service.icon}
                </div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>

              <div className="service-card-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

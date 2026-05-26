import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZoomIn } from 'react-icons/fi';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', '3D LED Boards', 'Sign Board Making', 'Sticker Art'];

  const works = [
    { id: 1, title: 'Premium LED Board', category: '3D LED Boards' },
    { id: 2, title: 'Corporate Signage', category: 'Sign Board Making' },
    { id: 3, title: 'Vehicle Decal', category: 'Sticker Art' },
    { id: 4, title: 'Shop Front Board', category: 'Sign Board Making' },
    { id: 5, title: 'Acrylic 3D Letters', category: '3D LED Boards' },
    { id: 6, title: 'Window Graphics', category: 'Sticker Art' },
  ];

  const filteredWorks = activeCategory === 'All' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="neon-text-gold">Works</span>
        </motion.h2>

        <div className="gallery-filters">
          {categories.map((cat, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="gallery-grid">
          <AnimatePresence>
            {filteredWorks.map((work, index) => (
              <motion.div 
                layout
                key={work.id}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={`https://picsum.photos/seed/zodiac${work.id}/800/600`} 
                  alt={work.title} 
                  className="gallery-img"
                />
                
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <span className="gallery-category">{work.category}</span>
                    <h3 className="gallery-title">{work.title}</h3>
                  </div>
                  <div className="gallery-icon">
                    <FiZoomIn size={30} className="neon-text-cyan" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="gallery-actions" style={{ textAlign: 'center', marginTop: '3rem' }}>
           <button className="btn-primary">Load More</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

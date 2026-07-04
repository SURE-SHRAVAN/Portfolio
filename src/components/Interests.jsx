import React from 'react';
import { motion } from 'framer-motion';
import { FiTool, FiFeather, FiMusic, FiCloud, FiDatabase } from 'react-icons/fi';
import './Interests.css';

const interests = [
  {
    title: "Automation & Tooling",
    icon: <FiTool size={24} />,
    description: "Inventing new tools and automating daily life workflows to maximize efficiency and build scalable systems."
  },
  {
    title: "Cloud & Data Domain",
    icon: <FiCloud size={24} />,
    description: "Deeply engaged in cloud architectures and data engineering, continuously exploring ways to handle massive datasets securely."
  },
  {
    title: "Creative Expression (Poetry)",
    icon: <FiFeather size={24} />,
    description: "Experienced in poetry writing, demonstrating a well-rounded dedication to mastery, expression, and abstract thinking."
  },
  {
    title: "Musical Mastery (Guitar)",
    icon: <FiMusic size={24} />,
    description: "Playing guitar with a focus on technical precision and creativity, showcasing discipline and continuous learning."
  }
];

const Interests = () => {
  return (
    <section className="section" id="interests">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          06. Diverse Expertise
        </motion.h2>

        <div className="interests-grid">
          {interests.map((interest, idx) => (
            <motion.div 
              key={interest.title}
              className="interest-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="interest-icon">
                {interest.icon}
              </div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

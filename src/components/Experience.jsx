import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "AI Domain Intern (6.0)",
    company: "Infosys Springboard",
    duration: "Recent",
    description: "Engaged in comprehensive AI training and practical project implementations, focusing on modern machine learning techniques and applying AI concepts to solve real-world problems."
  }
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          03. Professional Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <h4 className="company">{exp.company}</h4>
                <p className="description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

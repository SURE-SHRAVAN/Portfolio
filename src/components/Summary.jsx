import React from 'react';
import { motion } from 'framer-motion';
import './Summary.css';

const Summary = () => {
  return (
    <section className="section" id="summary">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          01. Summary
        </motion.h2>

        <motion.div 
          className="summary-content glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="summary-grid">
            <div className="summary-text">
              <p>
                I am an AI/ML Engineering student with a solid foundation in both full-stack development and data science. My expertise lies in translating complex datasets into actionable insights and deploying robust machine learning models into production environments.
              </p>
              <p>
                Specializing in Python, Django, and modern deep learning frameworks, I bring hands-on experience from developing AI-driven educational platforms and data analytics tools. I focus on writing clean, scalable code and building systems that bridge the gap between advanced algorithms and practical software engineering.
              </p>
              <p>
                I thrive in collaborative, fast-paced environments and am deeply passionate about applying intelligent systems to solve tangible business problems in tech-forward industries.
              </p>
            </div>
            <div className="summary-stats">
              <div className="stat-box">
                <h3>AI / ML</h3>
                <span>Core Focus</span>
              </div>
              <div className="stat-box">
                <h3>Backend</h3>
                <span>Architecture</span>
              </div>
              <div className="stat-box">
                <h3>Cloud</h3>
                <span>Deployment</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;

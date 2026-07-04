import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const certifications = [
  {
    title: "Infosys Springboard Internship",
    issuer: "Infosys",
    date: "2023",
    url: "#"
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "2024",
    url: "#"
  },
  {
    title: "Python Certification",
    issuer: "Certified Authority",
    date: "Recent",
    url: "#"
  },
  {
    title: "SQL Certification",
    issuer: "Certified Authority",
    date: "Recent",
    url: "#"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Recent",
    url: "#"
  }
];

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          05. Education & Certifications
        </motion.h2>

        <div className="edu-grid">
          <div className="edu-column">
            <h3 className="column-title">Academic Background</h3>
            <motion.div 
              className="edu-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="edu-header">
                <h4>Bachelors Of Technology</h4>
                <span>2023 — 2027</span>
              </div>
              <h5>BVC College of Engineering, Rajanagaram</h5>
              <p>Majors: Computer Science and Artificial Intelligence & Machine Learning</p>
            </motion.div>

            <motion.div 
              className="edu-card glass-card mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="edu-header">
                <h4>Board Of Intermediate Education</h4>
                <span>2021 — 2023</span>
              </div>
              <h5>Pratibha Junior College, Rajahmundry</h5>
            </motion.div>
          </div>

          <div className="edu-column">
            <h3 className="column-title">Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, idx) => (
                <motion.a 
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-card glass-card"
                  style={{ display: 'block', marginBottom: '1.5rem', textDecoration: 'none' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                >
                  <div className="cert-header">
                    <h4>{cert.title}</h4>
                  </div>
                  <p>{cert.issuer}</p>
                  <p className="cert-id" style={{ marginTop: '0.5rem' }}>View Certificate ↗</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

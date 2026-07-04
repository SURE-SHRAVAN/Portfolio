import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Message transmission initiated. (Demo)');
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          07. Establish Connection
        </motion.h2>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="contact-desc">
              Whether you have an inquiry, a project proposal, or just want to discuss the future of AI—my inbox is open. Let's engineer something extraordinary.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <FiMail size={20} className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>sureshravan22@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <FiPhone size={20} className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 9989106178</p>
                </div>
              </div>
              <div className="info-item">
                <FiMapPin size={20} className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Rajahmundry, 533101</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">System ID (Name)</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Transmission Address (Email)</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Data Payload (Message)</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              <span>Transmit Data</span>
              <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages & Tools',
    skills: ['Python', 'R', 'Java', 'JavaScript', 'SQL', 'Git', 'HTML5', 'CSS']
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['Django', 'DRF', 'Flask', 'React', 'Pandas', 'Numpy', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'OpenCV', 'LangChain', 'Huggingface']
  },
  {
    title: 'Concepts & Platforms',
    skills: ['AWS', 'GCP', 'PostgreSQL', 'Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'Jenkins', 'Regression Analysis', 'ANN/RNN/CNN', 'Optimization']
  }
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          02. Technical Arsenal
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

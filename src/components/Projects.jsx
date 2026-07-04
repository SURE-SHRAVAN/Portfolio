import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: "NextGenLearner",
    subtitle: "AI-Powered Learning Platform",
    stack: ["Django", "DRF", "PostgreSQL", "React", "Hugging Face"],
    description: "Built a full-stack educational platform aggregating YouTube courses and PDF learning materials. Implemented an AI assistant using Transformers to answer student queries and test understanding. Added user login, personalized dashboard, and GitHub integration.",
    impact: "Reduced time for course discovery and doubt resolution by ~60% for test users.",
    github: "#",
    live: "#"
  },
  {
    title: "Automated Data Analyzer",
    subtitle: "Data Preprocessing & Dashboarding",
    stack: ["Django", "Pandas", "SQLAlchemy", "Plotly", "Flask"],
    description: "Developed a web app that performs data cleaning, format conversion (SQL ↔ JSON, CSV), and generates visual dashboards. Integrated preprocessing features to prepare datasets for ML pipelines. Designed exportable reports.",
    impact: "Improved dataset readiness for ML training by 70%, helping non-tech users interpret complex data.",
    github: "#",
    live: "#"
  },
  {
    title: "AI News Summarizer",
    subtitle: "NLP-driven News App",
    stack: ["BeautifulSoup", "OCR", "NLTK", "Transformers", "Python", "Django"],
    description: "Created a tool that scrapes, processes, and summarizes news articles from URLs, images, or PDFs. Applied OCR, NLP summarization, and bias detection techniques to output validated summaries.",
    impact: "Cut news reading time by 75% for professionals and delivered bias awareness.",
    github: "#",
    live: "#"
  },
  {
    title: "Budget Wise",
    subtitle: "Financial Tracking & Analysis",
    stack: ["React", "Django", "SQL", "Data Visualization"],
    description: "Developed a comprehensive personal finance tracking application. Engineered features for expense categorization, budget forecasting, and interactive data visualization to help users manage their financial health.",
    impact: "Empowered users to identify spending habits and optimize their monthly budgets effectively.",
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          04. Key Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><FiGithub size={20} /></a>
                  <a href={project.live} target="_blank" rel="noreferrer"><FiExternalLink size={20} /></a>
                </div>
              </div>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              
              <div className="project-description">
                <p>{project.description}</p>
                <p className="impact"><strong>Impact:</strong> {project.impact}</p>
              </div>

              <div className="project-stack">
                {project.stack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import { SiHackerrank, SiLeetcode } from 'react-icons/si'; // need to install react-icons/si if not available, but let's use standard icons if unsure. 
// wait, react-icons/si is installed by default with react-icons.
import './QuickLinks.css';

const links = [
  { name: 'GitHub', icon: <FiGithub size={20} />, url: 'https://github.com/SURE-SHRAAVAN' },
  { name: 'LinkedIn', icon: <FiLinkedin size={20} />, url: 'https://www.linkedin.com/in/shraavan-sure-7196a52a2' },
  { name: 'LeetCode', icon: <SiLeetcode size={20} />, url: '#' }, // user will provide
  { name: 'HackerRank', icon: <SiHackerrank size={20} />, url: '#' } // user will provide
];

const QuickLinks = () => {
  return (
    <motion.div 
      className="quick-links"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8  }}
    >
      <div className="links-container">
        {links.map((link, idx) => (
          <a 
            key={link.name} 
            href={link.url} 
            target="_blank" 
            rel="noreferrer"
            className="quick-link-item"
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
        <div className="vertical-line"></div>
      </div>
    </motion.div>
  );
};

export default QuickLinks;

import React from 'react';
import rLogo from '../logo.svg';
import logo from '../assets/img/new-logo.png'


import { motion } from 'framer-motion';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaBootstrap } from "react-icons/fa";

const Footer = () => {





  return (
    <div style={{ color: 'white' }}>
      <div className="ftrIcons">
        <div className='icon'>
          <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.7 }}
            onClick={() => window.open("https://www.linkedin.com/in/seifenan/", "_blank")}
          >
            <FaLinkedin size={50}/>
          </motion.button>
        </div>
        <div className="icon">
          <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.7 }}
            onClick={() => window.open("https://github.com/Seifenan", "_blank")}
          >
            <FaGithubSquare size={50}/>
          </motion.button>
        </div>
        <div className="icon">
          <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.7 }}
            onClick={() => window.open("https://www.facebook.com/seifenan", "_blank")}
          >
            <FaFacebookSquare size={50}/>
          </motion.button>
        </div>

      </div>

      <h4>
        Made using<span> React<img src={rLogo} className="rLogo" alt="react logo" /></span>and Bootstrap <FaBootstrap />
      </h4>
      <br />
      <img src={logo} alt='logo-light' style={{ width: '250px' }} />
      <p> &copy; 2021</p>
    </div>
  );
};

export default Footer;

import React from 'react';
import rLogo from '../logo.svg';
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
            <FaLinkedin />
          </motion.button>
        </div>
        <div className="icon">
          <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.7 }}
            onClick={() => window.open("https://github.com/Seifenan", "_blank")}
          >
            <FaGithubSquare />
          </motion.button>
        </div>
        <div className="icon">
          <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.7 }}
            onClick={() => window.open("https://www.facebook.com/seifenan", "_blank")}
          >
            <FaFacebookSquare />
          </motion.button>
        </div>

      </div>

      <h4>
        Made using<span> React<img src={rLogo} className="rLogo" alt="react logo" /></span>and Bootstrap <FaBootstrap />
      </h4>
      <p>
        &copy; 2021 <span className="lastn">Enan</span>, Inc.
      </p>
    </div>
  );
};

export default Footer;

import React from 'react';
import { motion } from "framer-motion"

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='resume'>
      <motion.div animate={{ x: 0, y: -25, scale: 1.5 }} transition={{ ease: "easeIn", duration: 1 }}>Connect with me</motion.div>
      <p>You can find me on:</p>
      <div className='contact'>
        <motion.div 
          whileHover={{ scale: 1.5, transition: { duration: .5 } }}
          whileTap={{ scale: 0.7 }}
          animate={{ rotate: -360, transition: { duration: 1 } }}
          onClick={() => window.open("https://www.linkedin.com/in/seifenan/", "_blank")}
        >
          <h5>LinkedIn</h5>
          <FaLinkedin size={150} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.5, transition: { duration: .5 } }}
          whileTap={{ scale: 0.7 }}
          animate={{ rotate: 360, transition: { duration: 1 } }}
          onClick={() => window.open("https://github.com/Seifenan", "_blank")}
        >
          <h5>GitHub</h5>
          <FaGithubSquare size={150} />
        </motion.div>
      </div>
      <p>or reach me by <a href="mailto:seifenan@gmail.com" style={{ textDecoration: 'underline' }}>Email</a> @ seifenan@gmail.com</p>
    </div>
  );
};

export default Contact;

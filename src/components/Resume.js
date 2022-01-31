import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa'

import resume from '../assets/Enan-Resume.pdf'

const Resume = () => {
  return (
    <div className='resume'>

      <motion.div
        whileHover={{ scale: 2.5, transition: { duration: .5 } }}
        whileTap={{ scale: 0.7 }}
        animate={{ x: 0, y: -15, scale: 1.5 }} transition={{ ease: "easeOut", duration: 2 }}
      >
        <a rel='noreferrer' target='_blank' href={resume}><h4>My Resume <FaFileDownload /></h4></a>
      </motion.div>

      <div className='skills'>
        <h3>Skills</h3>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>MongoDB</li>
        <li>Heroku</li>
        <li>Figma</li>
      </div>

    </div>
  );
};

export default Resume;

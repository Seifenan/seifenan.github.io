import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa'

import resume from '../assets/enan-resume.pdf'
import resumeP from '../assets/img/resume.jpg'


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
          <motion.img
          src={resumeP}
          whileHover={{ x: 0, y: 160, scale: 1.5, transition: { duration: 1 } }}
          whileTap={{ x: 0, y: 40, scale: 1.9, transition: { duration: 1 } }}
          alt='resume'
        />
      </div>

    </div>
  );
};

export default Resume;

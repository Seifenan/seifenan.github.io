import React from 'react';
import Featured from './Featured';

import { motion } from 'framer-motion';


const Main = () => {
  return (
    <div>
      <div style={{ color: 'white', marginTop: '50px' }}>
        <h1>Hi! <span className='wave'>👋</span></h1>
        <br />
        <h3>I'm Seif Enan</h3>
        <h4>A Full-Stack Web Developer</h4>
        <br />
        <h6>Checkout my Featured Projects</h6>
      </div>
      <Featured />
      <br />
      <div className='reDirect'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
        <h6><a href='#/portfolio'>Click Here to view all my other work!</a></h6>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;

import React from 'react';
import { motion } from 'framer-motion';

import bioImg from '../assets/img/profile-pic.jpg';
import logo from '../assets/img/enan-logo-gif.gif'

const About = () => {
  return (
    <div className='about'>
      <img src={bioImg} alt='profile' className='bioPic' />
      <div className='aboutT'>
        <h2>About Me</h2>
        <p>
          I am a bilingual Full-stack Web Developer with a keen passion for front-end development. Skilled in HTML/CSS, JavaScript, React, Bootstrap, Heroku, Git, Node and Figma. I relish working with HTML/CSS and React, and was consistently praised and approached by project teammates to take the lead on the front end aspect of our projects. Meticulous, dependable, and enthusiastic about providing users with a seamless user experience. With prior management experience, I have developed great interpersonal, time management, and problem-solving skills. I look forward to in-person collaboration and teamwork in the workplace. 
        </p>
        <p>
          My interest in development stems from my early childhood years where I had a knack for taking computers apart to analyze the pieces and place them back together. This led to building my first PC at the age of 14 and a love for technology that will never be extinguished. Life's circumstances required me to get into the workforce at an early age and shifted my focus towards business management. However, my love for technology only kept growing, as the world around me kept evolving with advanced systems, tools, gadgets, and languages that my younger self would only dream of. I decided to get back to the root of my passion by enrolling and graduating from Columbia University’s Coding Bootcamp in January 2022.
        </p>
        <p>
          With my new found knowledge and skills, immersion in the latest tools and technologies, and the desire to continue learning and improving; I aim to further expand my knowledge and skills in front end development and be involved with projects that directly impact people and have a positive social influence. Eager to dive deeper into the tech industry.
        </p>
      </div>
      <br />
        <motion.img src={logo} alt='logo-gif' 
        style={{ width: '70%' }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.3 }} 
        />
    </div>
  );
};

export default About;

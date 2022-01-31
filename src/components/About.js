import React from 'react';

import bioImg from '../assets/img/profile-pic.jpg';


const About = () => {
  return (
    <div className='about'>
      <img src={bioImg} alt='profile' className='bioPic' />
      <div className='aboutT'>
        <h2>About Me</h2>
        <p>
          I am a bilingual Full-Stack Web Developer with a keen passion for Front-End Development. Skilled in HTML/CSS, JavaScript, React, Bootstrap, Npm, NodeJS, ExpressJS, MongoDB, Git, Heroku, MongoDB & Figma. Detail oriented, reliable, and passionate about providing users with a seamless user experience. Eager to dive deeper into the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;

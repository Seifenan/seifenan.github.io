import React from 'react';

import bioImg from '../assets/img/profile-pic.jpg';


const About = () => {
  return (
    <div className='about'>
      <img src={bioImg} alt='profile' className='bioPic' />
      <div className='aboutT'>
        <h2>About Me</h2>
        <p>
          I am a bilingual Full-stack Web Developer with a keen passion for front-end development. Skilled in HTML/CSS, JavaScript, React, Bootstrap, Heroku, Git, Node and Figma. Meticulous, dependable, and enthusiastic about providing users with a seamless user experience. Prior management experience with great people skills and yearns for in-person collaboration and teamwork.
        </p>
        <p>
          I enjoy working with HTML/CSS and React, and was consistently praised and approached by project teammates to take the lead on the front end aspect of our projects. With a certificate in Full Stack Web Development from Columbia University, immersion in the latest tools and technologies, and the desire to continue learning and improving; I aim to further develop my knowledge and skills in Redux and jQuery to complement my front-end skills and level up my knowledge in express and MySQL to complete my understanding of back-end frameworks and databases. Eager to dive deeper into the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;

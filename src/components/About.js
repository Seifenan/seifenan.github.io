import React from 'react';
import { Card } from 'react-bootstrap';
import { clamp } from 'tsparticles';

import bioImg from '../assets/img/profile-pic.jpg';


const About = () => {
  return (

    <div className='test'>
      <img src={bioImg} alt='profile' className='bioPic' />

      <div className='aboutB'>

      <h2>About Me</h2>

      <p>
        I am a bilingual full-stack web developer with a keen passion for front-end development. Skilled in HTML/CSS, JavaScript, React, Bootstrap, Heroku, Git and Node.
        I aim to further develop my knowledge and skills in Redux and jQuery to complement my front-end skills and level up my knowledge in express and MySQL to complete my understanding of back-end frameworks and databases.
        My desire to learn and improve will never be satiated. I have just graduated from Columbia University’s coding bootcamp and I am eager to dive deeper into the tech industry.
        </p>
        </div>
    </div>

    
  );
};

export default About;


<div className='about'>
  <div className='aboutP' >
    <img src={bioImg} alt='profile' className='bioPic' />

  </div>

  <div className='aboutB'>
    <h2>About Me</h2>
    <p>
      I am a bilingual full-stack web developer with a keen passion for front-end development. Skilled in HTML/CSS, JavaScript, React, Bootstrap, Heroku, Git and Node.
      I aim to further develop my knowledge and skills in Redux and jQuery to complement my front-end skills and level up my knowledge in express and MySQL to complete my understanding of back-end frameworks and databases.
      My desire to learn and improve will never be satiated. I have just graduated from Columbia University’s coding bootcamp and I am eager to dive deeper into the tech industry.
    </p>

  </div>
</div>

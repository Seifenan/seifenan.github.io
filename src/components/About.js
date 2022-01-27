import React from 'react';

import bioImg from '../assets/img/profile-pic.jpg';


const About = () => {
  return (

    <div className='about'>
      <div className='aboutP' >
        <img src={bioImg} alt='profile' style={{ width: '200px', borderRadius: '50%' }} />



        
      </div>

      <div className='aboutB'>
        <h2>About Me</h2>
        <br></br>
        <p>I am a licensed Real Estate Agent dedicated to giving clients professional service and honest advice.</p>

      </div>




    </div>




  );
};

export default About;

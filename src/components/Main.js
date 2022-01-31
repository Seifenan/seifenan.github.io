import React from 'react';
import Featured from './Featured';



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
    </div>
  );
};

export default Main;

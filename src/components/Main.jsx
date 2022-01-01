import React from 'react';
import About from './About';
import FeaturedProject from './FeaturedProjects';


function Main() {
  return (
    <div>
      <div className='intro'>
        <h2>Hello</h2>
        <p style={{ paddingTop: "20px" }}>Welcome to my React Portfolio; please note this is an ongoing project.</p>
        <p>I aim to add my best projects here on my main page while keeping all my projects on the Portfolio page.</p>
      </div>
      <About />
      <div className="container2">
        <h3 style={{textAlign: 'center'}}>Featured Projects</h3>
        <FeaturedProject />
      </div>
    </div>
  );
}

export default Main;
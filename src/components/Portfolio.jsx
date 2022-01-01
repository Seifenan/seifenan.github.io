import React from "react";

import FeaturedProject from './FeaturedProjects';
import Project from './Projects';


function Portfolio() {

  return (
    <section className="container2">
      <div style={{paddingBottom: '2%'}}>
        <h2>My Work</h2>
        <br></br>
      </div>
      <div style={{textAlign: 'center'}}>
        <h3>Featured Projects</h3>
        <FeaturedProject />
        <h3>All Projects</h3>
        <Project />
      </div>
    </section>
  )
}

export default Portfolio;

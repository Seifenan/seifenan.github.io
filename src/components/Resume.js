import React from 'react';

import resume from '../assets/Enan-resume.pdf';
import dImg from '../assets/dImg.png';


function Resume() {
  return (
    <div>
      <div className="cSection resume">
        <br></br>
        <a href={resume}>
          <img style={{ width: "10%" }} src={dImg} alt='download-icon' />
          <h2>Download my Resume</h2>
        </a>
        <br></br>
      </div>
      <div className="cSection resume">
        <h2>My Proficiencies</h2>
        <div className="resItems">
          <ul className="resItem">
            <h3>Foundation</h3>
            <li>Git</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Web, Third-Party & Server-Side API's</li>
          </ul>
          <ul className="resItem">
            <h3>Technical</h3>
            <li>Node.JS</li>
            <li>Object Oriented Programming (OOP)</li>
            <li>Express.JS</li>
            <li>SQL</li>
            <li>Object Relational Mapping (ORM)</li>
            <li>Model View Controller (MVC)</li>
          </ul>
          <ul className="resItem">
            <h3>Performance</h3>
            <li>NoSQL</li>
            <li>Progressive Web Applications (PWA)</li>
            <li>React</li>
            <li>MERN</li>
            <li>State</li>
          </ul>
        </div>
        <br></br>
      </div>
    </div>
  );
}
export default Resume;



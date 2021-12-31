import React from 'react';
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <div>
        <ul>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

import React from 'react';
import Hamburger from './Hamburger';
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <div>
        <ul className='navItems'>
          <div className="hamburger">
            <Hamburger />
          </div>  
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

import React from 'react';

// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <div>
        <div>
          <a href='/'><h2>Seif <span className="lastn">Enan</span></h2></a>
          <a href="/about">About Me</a>
          <a href="/portfolio">Featured Projects</a>
          <a href="/portfolio">All Work</a>
          <a href="/resume">Resume</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


import React from 'react';
import logo from '../assets/img/enan-logo-new.png'

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar sticky='top' bg="light" expand="sm">
      <Container>
        <Navbar.Brand href='/'><img src={logo} alt='enan-logo' style={{ width: '150px' }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link href="#/about">About Me</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/featured">Featured Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/portfolio">All Work</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#/resume">Resume</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;



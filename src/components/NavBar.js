import React, { useState } from 'react';
import logo from '../assets/img/enan-logo-gif.gif'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar sticky='top' bg="light" expand="sm" expanded={expanded}>
      <Container>
        <Navbar.Brand href='/'><img src={logo} alt='enan-gif' style={{ width: '150px' }}/></Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link onClick={() => setExpanded(false)} href="#/about">About Me</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setExpanded(false)} href="#/featured">Featured Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setExpanded(false)} href="#/portfolio">All Work</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => setExpanded(false)} href="#/resume">Resume</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

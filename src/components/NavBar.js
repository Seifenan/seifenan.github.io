import React from 'react';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href='/'>Seif <span className="lastn">Enan</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link href="/about">About Me</Nav.Link>

            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Featured Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/portfolio">All Work</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/resume">Resume</Nav.Link>

            <Nav.Link href="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;



// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/">SmartHire</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
          <Nav.Link as={Link} to="/candidates">Candidates</Nav.Link>
          <Nav.Link as={Link} to="/employers">Employers</Nav.Link>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

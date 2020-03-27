import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './styles.scss';

export default function Header() {
  return(
    <div className="header">
    <Navbar bg="dark" expand="lg" variant="dark" className="container">
    <Navbar.Brand href="#home" className="header__logo">FEELING PRESSED</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About us</Nav.Link>
        <Nav.Link href="#contact">Contact us</Nav.Link>
        <Nav.Link href="#team">Our Team</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
  )
}
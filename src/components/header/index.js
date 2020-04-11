import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" expand="lg" variant="dark" className="container">
        <Navbar.Brand className="header__logo">
          <Link to="/" id="link">
            FEELING PRESSED
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/about" id="link">
                {" "}
                About Us{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/contact" id="link">
                {" "}
                Contact Us{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/team" id="link">
                {" "}
                Our Team{" "}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

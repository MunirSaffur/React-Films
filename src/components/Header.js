import React, {useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          Invevnt Film
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="text-white">
            Home
          </Link>
        </Nav>
        
      </Container>
    </Navbar>
  );
};

export default Header;

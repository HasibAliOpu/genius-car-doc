import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../../images/logo.png";
const Header = () => {
  return (
    <>
      <Navbar sticky="top" expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} height="30" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Our Services</Nav.Link>
              <Nav.Link href="#experts">Our Experts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar sticky="top" expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} height="30" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#home">Home</Nav.Link>
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="/add">
                    Add
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manage">
                    Manage
                  </Nav.Link>
                  <Nav.Link as={Link} to="/orders">
                    Orders
                  </Nav.Link>
                </>
              )}
              {user ? (
                <Nav.Link as={Link} to="" onClick={() => signOut(auth)}>
                  Log Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {user?.displayName ? (
                <p className="mt-2 text-white">{user?.displayName}</p>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

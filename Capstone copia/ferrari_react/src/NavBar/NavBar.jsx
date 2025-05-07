import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg_navbar" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="LogoFerrari"
              src="src/assets/img/LogoNavBar2.png"
              width="50"
              height="60"
              className="d-inline-block m-2"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link as={Link} to="/" className="col_navcomp mx-1 text-center">
              <div className="d-flex justify-content-center align-items-center">
                <i className="bi bi-house-door mx-1"></i>
                <div>Home</div>
              </div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/monoposto"
              className="col_navcomp mx-1 text-center"
            >
              Monoposto Ferrari
            </Nav.Link>
            <Nav.Link
              href="#"
              to="/piloti"
              className="col_navcomp mx-1 text-center"
            >
              Piloti Ferrari
            </Nav.Link>
            <Nav.Link
              href="#"
              to="/storia"
              className="col_navcomp mx-1 text-center"
            >
              Storia della Ferrari
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/risultati"
              className="col_navcomp mx-1 text-center"
            >
              Risultati
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/tecnologia"
              className="col_navcomp mx-1 text-center"
            >
              Tecnologia Ferrari
            </Nav.Link>
            <Nav.Link
              href="#"
              to="/news"
              className="col_navcomp mx-1 text-center"
            >
              News
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/test"
              className="col_navcomp mx-1 text-center"
            >
              Test
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

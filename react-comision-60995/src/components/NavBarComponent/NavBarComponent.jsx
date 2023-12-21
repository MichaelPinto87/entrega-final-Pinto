import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

import { Link } from "react-router-dom";

export const NavBarComponent = () => {
  return (
    <Navbar variant="light" expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img style={{ width: "5rem" }} src="img/logoplay.jpg"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              style={{ textDecoration: "none", color: "Black", margin: "10px" }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ textDecoration: "none", color: "Black", margin: "10px" }}
              to="#link"
            >
              Productos
            </Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to={"/category/Consolas"}
                >
                  Consolas
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to={"/category/Joysticks"}
                >
                  Joysticks
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

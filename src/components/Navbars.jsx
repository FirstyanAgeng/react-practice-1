import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { CONTENT, HOME, ABOUT, LANDING } from "../router";
const Navbars = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to={HOME}>
                Home
              </NavLink>
              <NavLink className="nav-link" to={CONTENT}>
                Content
              </NavLink>
              <NavLink className="nav-link" to={ABOUT}>
                About
              </NavLink>
            </Nav>
            <Button variant="primary" onClick={() => navigate(LANDING)}>
              LOGOUT
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;

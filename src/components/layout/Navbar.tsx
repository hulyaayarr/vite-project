import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useBearStore } from "../../../stores/counter-stores";

function Navbar() {
  const bears = useBearStore((state) => state.bears);
  return (
    <NavbarBS expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <NavbarBS.Brand href="/">React-Bootstrap</NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>

            {/* <Link to={`/`}>Home</Link>
            <Link to={`/contact`}>Contact</Link>
            <Link to={`/about`}>about</Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
  */}
          </Nav>
          <div>
            <p>Bear Count: {bears}</p>
          </div>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}

export default Navbar;

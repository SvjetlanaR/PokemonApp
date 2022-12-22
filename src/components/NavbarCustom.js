import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarCustom() {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
      <Container>
        <button
          onClick={refreshPage}
          className="border me-2 bg-dark text-white"
        >
          Pokemon logo
        </button>

        <Nav.Link href="/" className="text-white">
          Pokemon
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/pokemon" className="text-white">
              Pokedex
            </Nav.Link>
            <Nav.Link href="/" className="text-white">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

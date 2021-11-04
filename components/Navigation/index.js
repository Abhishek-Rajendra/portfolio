import { Navbar, Nav, Container } from "react-bootstrap";
// import { withRouter } from "react-router";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              {/* <img src={logo} style={{ width: 30, marginTop: -6 }} /> */}
              Abhishek Rajendra Prasad
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/home" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/work" passHref>
                <Nav.Link>Work</Nav.Link>
              </Link>
              <Link href="/projects" passHref>
                <Nav.Link>Projects</Nav.Link>
              </Link>
              <Link href="/publications" passHref>
                <Nav.Link>Publications</Nav.Link>
              </Link>
              <Link href="/research" passHref>
                <Nav.Link>Research</Nav.Link>
              </Link>
              <Link href="/blog" passHref>
                <Nav.Link>Blog</Nav.Link>
              </Link>
              <Link href="/news" passHref>
                <Nav.Link>News</Nav.Link>
              </Link>
              <Link href="/hobbies" passHref>
                <Nav.Link>Hobbies</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

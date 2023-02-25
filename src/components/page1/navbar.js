import React from 'react';
import logo from './logo.png';
import '../page1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="logo-image" alt="Logo" />
                </Navbar.Brand>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link eventKey="">Product</Nav.Link>
          <Nav.Link eventKey="">Faq</Nav.Link>
          <Nav.Link eventKey="#contact">Link</Nav.Link>   
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar

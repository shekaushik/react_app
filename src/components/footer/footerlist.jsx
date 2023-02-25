import React from 'react';
import logo from '../images/web/logo.png';
import '../page1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Row, Container} from 'react-bootstrap';
import twitter from "../images/web/twitter.png"
import insta from "../images/web/insta.png"
import facebook from "../images/web/facebook.png"

const Bottom = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                        <Navbar.Brand href="/">
                            <img src={logo} className="logo-image" alt="Logo" />
                        </Navbar.Brand>
                        <Nav.Link href="/home">
                        <img src={twitter}></img>
                        </Nav.Link>
                        <Nav.Link eventKey="">
                            <img src={facebook}></img>
                        </Nav.Link>
                        <Nav.Link eventKey="">
                        <img src={insta}></img>
                        </Nav.Link>
                        <span>Copywright 2020 Bella Onojie.com</span>
                   

                </Container>
            </Navbar>
        </>
    )
}

export default Bottom
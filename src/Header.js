import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-secondary">
                <Container>
                    <Navbar.Brand href="#home">Starting Hand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Practice</Nav.Link>
                        <Nav.Link href="#link">Ranges</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
    return (
        <div>
            <Navbar expand="md" className="bg-body-secondary">
                <Container>
                    <Navbar.Brand href="/">Starting Hand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Practice</Nav.Link>
                        <Nav.Link href="/ranges">Ranges</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
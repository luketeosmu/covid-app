import React from 'react'
import { Navbar, NavDropdown, Container, Nav} from 'react-bootstrap'

const ForgotPasswordNavBar = () => {

    return (
        <Navbar bg="light" expand="lg" classname="mb-5">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand href="#home">Covid App</Navbar.Brand>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Need Help?" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
                            <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ForgotPasswordNavBar
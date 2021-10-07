import React from 'react'
import { Navbar, Nav, NavDropdown, Container, DropdownButton, Dropdown } from 'react-bootstrap'

const NavBar = () => {

    return (
        // userLoggedIn() ? (
        <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Covid App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="covidmeasures">COVID-19 Measures</Nav.Link>
                        <Nav.Link href="News">News</Nav.Link>
                        <Nav.Link href="employees">Employees</Nav.Link>
                        <Nav.Link href="fettest">FET Testing</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Hello, Name! " align="start" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#maccount">Manage Account</NavDropdown.Item>
                            <NavDropdown.Item href="#mbusiness">Manage Business</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="login">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // ) : (
        // <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
        //     <Container>
        //         <Navbar.Brand href="/">Covid App</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="covidmeasures">COVID-19 Measures</Nav.Link>
        //                 <Nav.Link href="News">News</Nav.Link>
        //             </Nav>
        //             <Nav>
        //                 <Nav.Link href="register">Register</Nav.Link>
        //                 <Nav.Link href="login">Login</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        // )

    )
}

export default NavBar
